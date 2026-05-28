import { gql } from '@apollo/client';
import WpBlocksFragment from '~/app/_components/blocks/WpBlocksFragment';

const getPostQuery = gql`
  ${WpBlocksFragment}
  query GetPost($id: ID!, $idType: PostIdType!, $asPreview: Boolean!) {
    post(id: $id, idType: $idType, asPreview: $asPreview) {
      __typename
      title
      editorBlocks(flat: true) {
        ...WpBlocksFragment
      }
      author {
        node {
          name
        }
      }
      date
      status
      isRestricted
    }
  }
`;

export default getPostQuery;
