# WpBlocksFragment

This directory is used to define React components for rendering custom WordPress blocks and to generate a GraphQL fragment `WpBlocksFragment` which should be used wherever you query WordPress properties `editorBlocks` or `innerBlocks` (the GraphQL type `EditorBlock`). Example:

```ts
import WpBlocksFragment from '@/app/_components/blocks/WpBlocksFragment';
import { gql } from '@apollo/client';

const getSomethingQuery = gql`
  ${WpBlocksFragment}
  query GetSomething() {
    someFunction {
      editorBlocks(flat: true) {
        ...WpBlocksFragment
      }
    }
  }
`;
```

## Defining a block

Each directory defines the React component to render a custom WordPress block and the GraphQL fragment to be combined into `WpBlocksFragment`.

The directory name must match the GraphQL type name of a custom WordPress block. Example: `AuthorBlock`.

## `fragments.ts`

Each directory must contain a file `fragments.ts` default exporting the GraphQL fragment, and this file import any CSS or other files that vanilla can't deal with. Example:

```ts
// AuthorBlock/fragments.ts

import { gql } from '@apollo/client';

const fragments = {
  key: `AuthorBlockFragment`,
  entry: gql`
    fragment AuthorBlockFragment on AuthorBlock {
      author {
        name
      }
    }
  `,
};

export default fragments;
```

## `index.tsx`

Each directory must contain a file `index.tsx` default exporting the React component used to render the fragment, and must include the imported fragment as a `fragments` property, along with some others Faust.js may use. Example:  

```tsx
// AuthorBlock/index.tsx

import { AuthorBlockFragmentFragment } from '@/types/__generated__/graphql';
import fragments from './fragments';

function AuthorBlock({ author }: AuthorBlockFragmentFragment): JSX.Element {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{author.name}</dd>
    </dl>
  );
}

AuthorBlock.config = {
  name: 'AuthorBlock',
};
AuthorBlock.displayName = 'AuthorBlock';
AuthorBlock.fragments = fragments;

export default AuthorBlock;
```

**Note:** While the _GraphQL_ type is `AuthorBlockFragment`, the _TypeScript_ type will be `AuthorBlockFragmentFragment`, and this will not be available quite yet. Continue below...

## Registering your component

Once the above is set up, include your block in the `custom.ts` file like so:

```ts
const customBlocks: Record<string, ComponentType> = {
  // ...existing blocks...
  
  AuthorBlock: dynamic(
    () => import('./AuthorBlock'),
  ),
};
```

Now your block's fragment will be seen by the code generators.

Run `ddev frontend generate` and commit the resulting changes in `WpBlocksFragment.ts` and `types/`. The required TypeScript type `AuthorBlockFragmentFragment` will have been created in `@/types/__generated__/graphql`.
