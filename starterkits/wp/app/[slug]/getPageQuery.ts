import { gql } from '@apollo/client';
import WpBlocksFragment from '~/app/_components/blocks/WpBlocksFragment';

const getPageQuery = gql`
  ${WpBlocksFragment}
  query GetPage($id: ID!, $idType: PageIdType!, $asPreview: Boolean!) {
    page(id: $id, idType: $idType, asPreview: $asPreview) {
      __typename
      title
      editorBlocks(flat: true) {
        ...WpBlocksFragment
      }
      author {
        node {
          nicename
        }
      }
      date
      status
      isRestricted
    }
  }
`;

export default getPageQuery;
