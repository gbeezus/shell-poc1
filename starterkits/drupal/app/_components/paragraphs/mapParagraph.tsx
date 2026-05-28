import dynamic from 'next/dynamic';
import { JSX } from 'react';
import { FragmentType, getFragmentData } from '~/types/__generated__';
import AllParagraphsFragment from './AllParagraphsFragment';

/**
 * Maps the paragraph type as returned by GraphQL with the integration template.
 * As you add or remove paragraph types, you'll need to update this map.
 */
const paragraphMapping = {
  ParagraphAccordion: dynamic(() => import('./AccordionParagraph')),
  ParagraphBlockEmbed: dynamic(() => import('./BlockEmbedParagraph')),
  ParagraphCard: dynamic(() => import('./CardParagraph')),
  ParagraphCards: dynamic(() => import('./CardsParagraph')),
  ParagraphHero: dynamic(() => import('./HeroParagraph')),
  ParagraphWysiwyg: dynamic(() => import('./WysiwygParagraph')),
};

function isMappable(
  typename?: string,
): typename is keyof typeof paragraphMapping {
  return !!(
    typename && Object.prototype.hasOwnProperty.call(paragraphMapping, typename)
  );
}

/**
 * Imports the appropriate template based on the paragraph type.
 */
function mapParagraph(
  entity: FragmentType<typeof AllParagraphsFragment>,
): JSX.Element | null {
  const paragraph = getFragmentData(AllParagraphsFragment, entity);

  if (!paragraph?.id || !isMappable(paragraph.__typename)) {
    return null;
  }

  const ParagraphComponent = paragraphMapping[paragraph.__typename];
  // @ts-expect-error We are trusting here that the component dynamically imported via the mapping
  // expects the type of fragment that we have, i.e. we won't map the BlockEmbed paragraph component to
  // the ParagraphAccordion type. However, since the import map doesn't guarantee that we aren't doing
  // that, TypeScript flags the potentially incompatible types.
  return <ParagraphComponent paragraph={paragraph} key={paragraph.id} />;
}

export { paragraphMapping };
export default mapParagraph;
