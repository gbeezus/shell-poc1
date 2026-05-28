import { gql } from '@apollo/client';

const homeMetadataQuery = gql`
  query HomeMetadata {
    generalSettings {
      title
      description
    }
  }
`;

export default homeMetadataQuery;
