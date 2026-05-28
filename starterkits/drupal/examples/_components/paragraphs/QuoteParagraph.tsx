import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Quote from '~components/Quote/Quote';

/**
 * Fragment for a quote paragraph with just two plain text fields,
 * a quote and a citation.
 *
 * You would also need to include this fragment in the AllParagraphs fragment.
 */
const QuoteParagraphFragment = graphql(`
  fragment QuoteParagraphFragment on ParagraphQuote {
    quote
    citation
  }
`);

/**
 * Component to display the quote. In this example, you would also need a
 * Quote component in source that displays the quote with whatever styling you
 * needed.
 *
 * In addition, you would need to add this template to the object map in
 * mapParagraph.tsx.
 *
 * Think of this as a paragraph--quote.html.twig template.
 */
function QuoteParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof QuoteParagraphFragment>;
}) {
  const quoteParagraph = getFragmentData(QuoteParagraphFragment, paragraph);
  return (
    <Quote content={quoteParagraph.quote} citation={quoteParagraph.citation} />
  );
}

export default QuoteParagraph;
export { QuoteParagraphFragment };
