# Headless Drupal Starter Kit

Guide to using `nextjs-project` and Gesso for React for a headless Drupal site.

## Initial Setup
1. Follow the steps in the README at the base of the repo.
2. Run `ddev start`
3. Run `ddev setup-drupal`. (This only has to be done once by whoever is first setting up the repo.)
4. Copy `.env.local.example` to `.env.local`
5. Fill in the variables in the .env.local file with the information needed
   to connect to Drupal. See the [Next for Drupal](https://next-drupal.org/learn/graphql/create-nexts-project)
   guide.

## Drupal Setup
Updating drupal-project to support headless Drupal is still to come. In the 
mean time, refer to [the Next.js for Drupal guide](https://next-drupal.org/learn/graphql)
and the [the example headless Drupal project](https://github.com/forumone/fed-workshop-nextjs-drupal).

## Headless Drupal Starter Kit
Running `ddev setup-drupal` initially adds the required npm packages, tooling, and initial templates
for the basic Drupal content types: Page and Article. 

### Utility functions
Drupal-specific utility functions are already in the `util` directory, in the `drupal` subdirectory.

### Examples
Example components and templates can be found in `starterkits/drupal/examples`. Within that directory,
the files are located where they would be under `app` (so a file that would go in `app/_content` is in
`examples/_content`). The examples include comments to help explain how they work.

Includes example implementations for:
* Global header and footer
* Menus (including a responsive menu and a menu using Menu Item Extras)
* Views
* Paragraphs
* Content blocks

## GraphQL Types
Types for GraphQL queries and fragments are auto-generated. Settings for the GraphQL Codegen are in
the `codegen.ts` file that is copied to the root of your project during setup. Any time you make a change
to a query or fragment, run `ddev frontend generate` to regenerate the types. Note that to generate the
types, the container running Next.js must be able to connect to the Drupal site, so your project will need
to be running and the environment variables entered in your .env.local file.

Any queries and fragments need to be wrapped in the `graphql` function in order to be recognized
and typed correctly. See the examples in the starting templates and in `starterkits/drupal/examples`.

There are some existing type predicate functions in `util/drupal` for checking types in a couple of
common areas. See `starterkits/drupal/examples/_navigation` for examples of using `prepMenuItems` to
prepare the GraphQL responses for rendering as a menu and `[...slug]/page.tsx` and `blog/[slug]/page.tsx`
for examples of validating a node before rendering the detail page.
