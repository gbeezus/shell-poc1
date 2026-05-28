import { gql } from '@apollo/client';

const layoutMetadataQuery = gql`
  query LayoutMetadata {
    generalSettings {
      title
    }
  }
`;

export default layoutMetadataQuery;
