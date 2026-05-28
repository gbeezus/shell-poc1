import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';

const DynamicCardParagraphFragment = graphql(`
  fragment DynamicCardParagraphFragment on ParagraphDynamicCard {
    cardReference {
      __typename
      ... on NodeInterface {
        id
        status
      }
      ...ArticleCardFragment
      ...BasicPageCardFragment
    }
  }
`);

const cardMapping: Record<string, ComponentType<{ entity: object }>> = {
  NodeArticle: dynamic(() => import('@/app/_components/content/ArticleCard')),
  NodePage: dynamic(() => import('@/app/_components/content/BasicPageCard')),
};

function DynamicCardParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof DynamicCardParagraphFragment>;
}) {
  const cardParagraph = getFragmentData(
    DynamicCardParagraphFragment,
    paragraph,
  );
  if (
    cardParagraph.cardReference &&
    cardParagraph.cardReference.status &&
    Object.prototype.hasOwnProperty.call(
      cardMapping,
      cardParagraph.cardReference.__typename,
    )
  ) {
    const CardComponent = cardMapping[cardParagraph.cardReference.__typename];
    return (
      <CardComponent
        entity={cardParagraph.cardReference}
        key={cardParagraph.cardReference.id}
      />
    );
  }
  return null;
}

export default DynamicCardParagraph;
export { DynamicCardParagraphFragment };
