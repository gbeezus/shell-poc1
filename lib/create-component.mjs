/* eslint-disable no-console */
import mustache from '@forumone/tiny-mustache';
import { confirm, input, select } from '@inquirer/prompts';
import { camelCase, capitalCase, kebabCase, pascalCase } from 'change-case';
import {
  access,
  lstat,
  mkdir,
  readdir,
  readFile,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';

/**
 * Parses command-line arguments.
 * @param {string[]} argv - process.argv
 * @returns {{name: string|null, folder: string|null, title: string|null, subfolder: string, noStory: boolean, help: boolean}}
 */
function parseArgs(argv) {
  const args = argv.slice(2);
  const parsed = {
    name: null,
    folder: null,
    title: null,
    subfolder: '',
    noStory: false,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--name':
        parsed.name = args[++i];
        break;
      case '--folder':
        parsed.folder = args[++i];
        break;
      case '--title':
        parsed.title = args[++i];
        break;
      case '--subfolder':
        parsed.subfolder = args[++i];
        break;
      case '--no-story':
        parsed.noStory = true;
        break;
      case '--help':
      case '-h':
        parsed.help = true;
        break;
    }
  }

  return parsed;
}

/**
 * Prints usage information.
 */
function printUsage() {
  console.log(`
Usage: npm run component [options]

Options:
  --name <name>        Component name (required in non-interactive mode)
  --folder <folder>    Component location (required in non-interactive mode)
  --title <title>      Human-readable title (default: Capital Case of name)
  --subfolder <name>   Optional subfolder within the component location
  --no-story           Skip Storybook story generation
  --help, -h           Show this help message

Examples:
  npm run component                                    # Interactive mode
  npm run component -- --name MyComponent --folder 03-components
  npm run component -- --name Button --folder 03-components --subfolder Forms
  npm run component -- --name Card --folder 03-components --title "Card Component" --no-story
`);
}

/**
 * Validates required arguments in non-interactive mode.
 * @param {{name: string|null, folder: string|null}} parsed - Parsed arguments
 */
function validateRequiredArgs(parsed) {
  const errors = [];

  if (!parsed.name) {
    errors.push('--name is required');
  }
  if (!parsed.folder) {
    errors.push('--folder is required');
  }

  if (errors.length > 0) {
    console.error('Error: Missing required arguments:');
    errors.forEach(err => console.error(`  - ${err}`));
    console.error('');
    printUsage();
    process.exit(1);
  }
}

/**
 * Validates that folder is one of the allowed values.
 * @param {string} folder - Folder name to validate
 * @param {string[]} validFolders - List of valid folder names
 */
function validateFolder(folder, validFolders) {
  if (!validFolders.includes(folder)) {
    console.error(`Error: Invalid folder "${folder}".`);
    console.error(`Valid options: ${validFolders.join(', ')}`);
    process.exit(1);
  }
}

/**
 * Validates that component name is a valid identifier.
 * @param {string} name - Component name to validate
 */
function validateComponentName(name) {
  if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(name)) {
    console.error(
      'Error: Component name must start with a letter and contain only alphanumeric characters.',
    );
    process.exit(1);
  }
}

/**
 * Prints component summary without confirmation prompt.
 * @param {object} mustacheData - Component data
 */
function printSummary(mustacheData) {
  const output = mustache(
    `Creating component:
  Name: {{componentName}}
  Title: {{componentTitle}}
  Location: {{componentLocation}}
  Include Story: {{useStorybook}}`,
    mustacheData,
  );
  console.log(output);
}

/**
 * Creates the cascade layer name from the directory name.
 * @param {string} directoryName - The directory name
 * @return {string}
 */
function cascadeLayer(directoryName) {
  const parts = directoryName.split('-');
  return parts[parts.length - 1];
}

/**
 * Checks whether the source directory is an accessible directory.
 * @param {node:fs.PathLike} source - Source path
 * @return {Promise<boolean>} - True if source is an accessible directory
 */
async function isDirectory(source) {
  try {
    const stats = await lstat(source);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Get available component directories.
 * @param {node:fs.PathLike} source - Source path
 * @return {Promise<string[]>} - Array of component directory paths
 */
async function getDirectories(source) {
  /** @type {string[]} */
  const directoryFiles = await readdir(source);
  /** @type {string[]} */
  const directoryPaths = directoryFiles
    .filter(
      dirName => !['00-config', '05-pages', '06-utility'].includes(dirName),
    )
    .map(name => path.join(source, name));
  /** @type {Awaited<boolean>[]} */
  const isDirectoryResults = await Promise.all(directoryPaths.map(isDirectory));
  return directoryPaths.filter((value, index) => isDirectoryResults[index]);
}

/**
 * Get the machine name from user input.
 * @return {Promise<string>} - Machine name of new component
 */
async function getMachineName() {
  const question = {
    message: 'What is the name of your component?',
    transformer: pascalCase,
    required: true,
  };
  const componentName = await input(question);
  return pascalCase(componentName).trim();
}

/**
 * Get the human-readable name from user input.
 * @param {string} componentName - Machine name of new component
 * @returns {Promise<string>} - Human-readable name of new component
 */
async function getComponentTitle(componentName) {
  const defaultComponentTitle = capitalCase(componentName);
  const question = {
    message: 'What is the human-readable title of your component?',
    default: defaultComponentTitle,
    transformer: capitalCase,
    required: true,
  };
  const componentTitle = await input(question);
  return componentTitle.trim();
}

/**
 * Select the component folder from available directories.
 * @returns {Promise<string>} - Name of selected folder
 */
async function getComponentFolder() {
  const patternSrc = path.join(process.cwd(), 'source');
  const patternDir = await getDirectories(patternSrc);
  const question = {
    message: 'Choose the component location:',
    choices: patternDir.map(item => path.basename(item)),
  };
  return select(question);
}

/**
 * Gets the name of the optional subdirectory.
 * @returns {Promise<string>} - Subdirectory or empty string if no directory entered
 */
async function getComponentFolderSub() {
  const question = {
    message: 'Include subfolder or leave blank',
  };
  const componentFolderSub = await input(question);
  return componentFolderSub.trim();
}

/**
 * Gets whether to generate a Storybook story.
 * @returns {Promise<boolean>}
 */
async function getUseStorybook() {
  const question = {
    message: 'Create a Storybook story?',
    default: true,
  };
  return confirm(question);
}

/**
 * Confirms whether to create component.
 * @param {object} mustacheData - Data to fill in mustache templates.
 * @returns {Promise<boolean>}
 */
async function confirmComponent(mustacheData) {
  const output = mustache(
    `---
Component Name: {{componentName}}
Component Title: {{componentTitle}}
Component Location: {{componentLocation}}
Include Story?: {{useStorybook}}
---`,
    mustacheData,
  );
  console.log(output);
  const question = {
    message: 'Is this what you want?',
  };
  return confirm(question);
}

/**
 * Creates a file from a template and given mustache data.
 *
 * @param {string} fileName - The name of the final file, with mustache placeholders if required.
 * @param {string} templatePath - The path to the template file to be used as a base for the new file.
 * @param {Object} mustacheData - An object containing key-value pairs for populating the Mustache templates.
 * @return {Promise<void>}
 */
async function createFile(fileName, templatePath, mustacheData) {
  const filePath = mustache(fileName, mustacheData);
  const templateContents = await readFile(path.resolve(templatePath), {
    encoding: 'utf-8',
  });
  const newFileContents = mustache(templateContents, mustacheData);
  const directoryPath = path.dirname(filePath);
  try {
    await access(directoryPath);
  } catch {
    await mkdir(directoryPath, { recursive: true });
  }
  await writeFile(filePath, newFileContents, { encoding: 'utf-8', flag: 'w+' });
}

/**
 * Generates a new component based on user input or CLI arguments.
 *
 * @return {Promise<void>}
 */
async function generator() {
  const cliArgs = parseArgs(process.argv);
  const isInteractive = process.argv.slice(2).length === 0;

  // Handle --help flag
  if (cliArgs.help) {
    printUsage();
    process.exit(0);
  }

  let componentName,
    componentTitle,
    componentFolder,
    componentFolderSub,
    useStorybook;

  if (isInteractive) {
    // Interactive mode - existing behavior
    componentName = await getMachineName();
    validateComponentName(componentName);
    componentTitle = await getComponentTitle(componentName);
    componentFolder = await getComponentFolder();
    componentFolderSub = await getComponentFolderSub();
    useStorybook = await getUseStorybook();
  } else {
    // Non-interactive mode
    validateRequiredArgs(cliArgs);

    // Get valid folders dynamically
    const patternSrc = path.join(process.cwd(), 'source');
    const patternDir = await getDirectories(patternSrc);
    const validFolders = patternDir.map(item => path.basename(item));
    validateFolder(cliArgs.folder, validFolders);
    validateComponentName(pascalCase(cliArgs.name));

    componentName = pascalCase(cliArgs.name);
    componentTitle = cliArgs.title || capitalCase(componentName);
    componentFolder = cliArgs.folder;
    componentFolderSub = cliArgs.subfolder || '';
    useStorybook = !cliArgs.noStory;
  }

  const componentLocation = path.join(
    componentFolder,
    pascalCase(componentFolderSub),
  );

  const mustacheData = {
    // Partials
    propsName: '{{componentName}}Props',
    componentAlias: '{{componentName}}Component',
    argsName: '{{#camelCase}}{{componentName}}{{/camelCase}}Args',
    // Variables
    componentName,
    componentTitle,
    componentLocation,
    componentFolder,
    useStorybook,
    // Lambdas
    machineName: (text, render) => {
      return pascalCase(render(text));
    },
    humanName: (text, render) => {
      return camelCase(render(text));
    },
    cascadeLayer: (text, render) => {
      return cascadeLayer(render(text));
    },
    kebabCase: (text, render) => {
      return kebabCase(render(text));
    },
    camelCase: (text, render) => {
      return camelCase(render(text));
    },
    titleCase: (text, render) => {
      return capitalCase(render(text));
    },
  };

  let shouldCreate = true;

  if (isInteractive) {
    shouldCreate = await confirmComponent(mustacheData);
  } else {
    printSummary(mustacheData);
  }

  if (shouldCreate) {
    const filePromises = [
      createFile(
        './source/{{componentLocation}}/{{componentName}}/{{componentName}}.tsx',
        './lib/templates/Component.hbs',
        mustacheData,
      ),
      createFile(
        './source/{{ componentLocation }}/{{ componentName }}/{{#kebabCase}}{{ componentName }}{{/kebabCase}}.module.css',
        './lib/templates/Stylesheet.hbs',
        mustacheData,
      ),
    ];

    if (useStorybook) {
      filePromises.push(
        createFile(
          './source/{{ componentLocation }}/{{ componentName }}/{{#camelCase}}{{ componentName }}{{/camelCase}}Args.ts',
          './lib/templates/Data.hbs',
          mustacheData,
        ),
        createFile(
          './source/{{ componentLocation }}/{{ componentName }}/{{ componentName }}.stories.tsx',
          './lib/templates/Story.hbs',
          mustacheData,
        ),
      );
    }

    await Promise.all(filePromises);
    console.log('Component created.');
  } else {
    console.error('Component canceled.');
  }
}

generator();
