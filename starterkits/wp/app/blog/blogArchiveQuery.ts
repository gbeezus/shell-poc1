import { gql } from '@apollo/client';

const blogArchiveQuery = gql`
  query BlogArchive($first: Int, $last: Int, $after: String, $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      edges {
        cursor
        node {
          slug
          uri
          title
          id
          featuredImage {
            node {
              altText
              uri
              sourceUrl
              srcSet(size: MEDIUM)
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
    }
  }
`;

export default blogArchiveQuery;
