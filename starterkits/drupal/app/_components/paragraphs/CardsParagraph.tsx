import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import { ParagraphCard } from '~/types/__generated__/graphql';
import entityIsType from '~/util/entityIsType';
import Grid from '~layouts/Grid/Grid';
import { paragraphMapping } from './mapParagraph';

const CardsParagraphFragment = graphql(`
  fragment CardsParagraphFragment on ParagraphCards {
    cards {
      __typename
      ... on ParagraphInterface {
        id
      }
      ...CardParagraphFragment
    }
  }
`);

function CardsParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof CardsParagraphFragment>;
}) {
  const cardsParagraph = getFragmentData(CardsParagraphFragment, paragraph);
  return (
    <Grid numCols={3}>
      {cardsParagraph.cards
        .filter(c => entityIsType<ParagraphCard>(c, 'ParagraphCard'))
        .map(c => {
          const CardComponent = paragraphMapping[c.__typename];
          return <CardComponent paragraph={c} key={c.id} />;
        })}
    </Grid>
  );
}

export default CardsParagraph;
export { CardsParagraphFragment };
