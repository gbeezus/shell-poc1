import Image from 'next/image';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Card from '~components/Card/Card';

const CardParagraphFragment = graphql(`
  fragment CardParagraphFragment on ParagraphCard {
    id
    cardLink {
      url
    }
    cardMedia {
      ... on MediaImage {
        mediaImage {
          alt
          variations(styles: LARGE) {
            height
            url
            width
          }
        }
      }
    }
    cardSubtitle
    cardTitle
  }
`);

function CardParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof CardParagraphFragment>;
}) {
  const cardParagraph = getFragmentData(CardParagraphFragment, paragraph);
  return (
    <Card
      title={cardParagraph.cardTitle}
      url={
        cardParagraph.cardLink && cardParagraph.cardLink.url
          ? cardParagraph.cardLink.url
          : undefined
      }
      media={
        cardParagraph.cardMedia &&
        cardParagraph.cardMedia.mediaImage &&
        cardParagraph.cardMedia.mediaImage.variations ? (
          <Image
            src={cardParagraph.cardMedia.mediaImage.variations[0].url}
            alt={cardParagraph.cardMedia.mediaImage.alt || ''}
            width={cardParagraph.cardMedia.mediaImage.variations[0].width}
            height={cardParagraph.cardMedia.mediaImage.variations[0].height}
          />
        ) : undefined
      }
    >
      {cardParagraph.cardSubtitle}
    </Card>
  );
}

export default CardParagraph;
export { CardParagraphFragment };
