import { graphql } from '~/types/__generated__';

/**
 * Fragment for all potential paragraph types we want to retrieve if they're
 * included (which typically means all paragraph types.)
 */
const AllParagraphsFragment = graphql(`
  fragment AllParagraphsFragment on ParagraphUnion {
    __typename
    ... on ParagraphInterface {
      id
    }
    ...AccordionParagraphFragment
    ...BlockEmbedParagraphFragment
    ...CallToActionParagraphFragment
    ...CardParagraphFragment
    ...CardsParagraphFragment
    ...HeroParagraphFragment
    ...WysiwygParagraphFragment
  }
`);

export default AllParagraphsFragment;
