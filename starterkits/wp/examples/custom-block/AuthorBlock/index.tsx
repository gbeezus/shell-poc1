/**
 * The React component used to render a WP custom block "AuthorBlock".
 * See README.md
 */

import { AuthorBlockFragmentFragment } from '~/types/__generated__/graphql';
import fragments from './fragments';

import type { JSX } from 'react';

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
