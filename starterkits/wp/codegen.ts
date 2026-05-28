import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

const config: CodegenConfig = {
  overwrite: true,
  emitLegacyCommonJSImports: true,
  documents: ['{app,source,utils}/**/*.{tsx,ts}'],
  schema: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
  ignoreNoDocuments: true,
  generates: {
    './types/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;
