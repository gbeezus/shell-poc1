import { gql } from '@apollo/client';

const searchQuery = gql`
  query Search(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $search: String
  ) {
    contentNodes(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {
        contentTypes: [FILM, PAGE, POST]
        search: $search
        status: PUBLISH
      }
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          __typename
          id
          ... on NodeWithTitle {
            title
          }
          ... on NodeWithExcerpt {
            excerpt
          }
          ... on Film {
            slug
          }
          ... on Page {
            slug
          }
          ... on Post {
            slug
          }
        }
      }
    }
  }
`;

export default searchQuery;
