import Image from 'next/image';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import HeroInlineImage from '~components/HeroInlineImage/HeroInlineImage';

const HeroParagraphFragment = graphql(`
  fragment HeroParagraphFragment on ParagraphHero {
    id
    heroAlignment
    heroBody: wysiwyg {
      processed
    }
    heroHasOverlay
    heroHeading: title
    heroImage: mediaItem {
      ... on MediaImage {
        id
        name
        mediaImage {
          alt
          height
          width
          url
        }
      }
    }
    heroLink: link {
      title
      url
    }
  }
`);

function HeroParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof HeroParagraphFragment>;
}) {
  const heroParagraph = getFragmentData(HeroParagraphFragment, paragraph);
  return (
    <HeroInlineImage
      hasOverlay={heroParagraph.heroHasOverlay || false}
      heroImage={
        heroParagraph.heroImage.mediaImage ? (
          <Image
            alt={heroParagraph.heroImage.mediaImage.alt || ''}
            src={heroParagraph.heroImage.mediaImage.url}
            height={heroParagraph.heroImage.mediaImage.height}
            width={heroParagraph.heroImage.mediaImage.width}
          />
        ) : undefined
      }
      title={heroParagraph.heroHeading ?? undefined}
      summary={
        heroParagraph.heroBody &&
        typeof heroParagraph.heroBody?.processed === 'string'
          ? heroParagraph.heroBody?.processed
          : undefined
      }
      button={
        heroParagraph.heroLink && heroParagraph.heroLink.url
          ? {
              label: heroParagraph.heroLink.title || '',
              href: heroParagraph.heroLink.url,
            }
          : undefined
      }
    />
  );
}

export default HeroParagraph;
export { HeroParagraphFragment };
