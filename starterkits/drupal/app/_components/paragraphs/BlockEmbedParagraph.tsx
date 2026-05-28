import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';

const BlockEmbedParagraphFragment = graphql(`
  fragment BlockEmbedParagraphFragment on ParagraphBlockEmbed {
    block {
      ... on BlockInterface {
        render
      }
    }
  }
`);

function BlockEmbedParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof BlockEmbedParagraphFragment>;
}) {
  const blockEmbedParagraph = getFragmentData(
    BlockEmbedParagraphFragment,
    paragraph,
  );
  return (
    <div
      dangerouslySetInnerHTML={
        typeof blockEmbedParagraph.block?.render === 'string'
          ? { __html: blockEmbedParagraph.block?.render }
          : undefined
      }
    />
  );
}

export default BlockEmbedParagraph;
export { BlockEmbedParagraphFragment };
