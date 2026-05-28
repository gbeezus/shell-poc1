import { gql } from '@apollo/client';

// Note: For some reason, if we use variable strings for the keys (i.e. `...${SomeFragmentKey}`),
// codegen will just totally ignore this whole query.
const readingSettingsQuery = gql`
  query GetReadingSettings {
    readingSettings {
      pageOnFront
      showOnFront
    }
    generalSettings {
      title
    }
  }
`;

export default readingSettingsQuery;
