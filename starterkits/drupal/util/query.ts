import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';
import drupal from './drupal';
import graphqlEndpoint from './graphqlEndpoint';

type QueryJsonResponse<DataType> = {
  data?: DataType;
  errors?: { message: string }[];
};

async function query<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult | undefined> {
  const response = await drupal.fetch(graphqlEndpoint.toString(), {
    method: 'POST',
    body: JSON.stringify({
      query: print(document),
      variables,
    }),
    withAuth: true, // Make authenticated requests using OAuth.
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!response?.ok) {
    throw new Error(response.statusText);
  }

  const { data, errors } =
    (await response.json()) as QueryJsonResponse<TResult>;
  if (errors) {
    console.log(errors);
    throw new Error(errors?.map(e => e.message).join('\n') ?? 'unknown');
  }

  return data;
}

export default query;
export type { QueryJsonResponse };
