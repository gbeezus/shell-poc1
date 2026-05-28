/**
 * The fragment used to pull fields off a WP custom block "AuthorBlock".
 * See README.md
 */

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
