// The GraphQL codegen module is only installed on headless projects using
// GraphQL (namely, Drupal), which is also the only type of project this script
// applies to.
// @ts-ignore
import { CodegenContext, generate } from '@graphql-codegen/cli';
import { resolve } from 'node:path';
// The codegen and util files won't be at their destination until the setup
// script is run. Using ts-ignore here because ts-expect-error will then error
// once the script is run and the files *do* exist.
// @ts-ignore
import codegenConfig from '../../codegen';
// @ts-ignore
import drupal from '../../util/drupal/drupal';
// @ts-ignore
import graphqlEndpoint from '../../util/drupal/graphqlEndpoint';

async function generateGraphQLTypes() {
  try {
    const token = await drupal.getAccessToken();
    await generate(
      new CodegenContext({
        config: {
          ...codegenConfig,
          schema: {
            [graphqlEndpoint.toString()]: {
              headers: {
                Authorization: `${token.token_type} ${token.access_token}`,
              },
            },
          },
        },
        filepath: resolve(__dirname, '../codegen.ts'),
      }),
      true,
    );
  } catch (error) {
    console.error(error);
  }
}

void generateGraphQLTypes().then(() => {
  console.log('Types generated');
});
