import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Box from '~components/Box/Box';

/**
 * Fragment for a trivia paragraph with a text field for the title and
 * a multivalue text field for the trivia items.
 *
 * You would also need to include this fragment in the AllParagraphs fragment.
 */
const TriviaParagraphFragment = graphql(`
  fragment TriviaParagraphFragment on ParagraphTrivia {
    title
    items
  }
`);

/**
 * Component to display the trivia. In this example, you would also need a Box
 * component in source. (The rendering of individual items to a list could also
 * be part of that component if preferred.)
 *
 * In addition, you would need to add this template to the object map in
 * mapParagraph.tsx.
 *
 * Think of this as the equivalent of paragraph--trivia.html.twig.
 */
function TriviaParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof TriviaParagraphFragment>;
}) {
  const triviaParagraph = getFragmentData(TriviaParagraphFragment, paragraph);
  return (
    <Box title={triviaParagraph.title} headingElement="h3">
      <ul>
        {triviaParagraph.items.map((triviaItem, index) => (
          <li key={index}>{triviaItem}</li>
        ))}
      </ul>
    </Box>
  );
}

export default TriviaParagraph;
export { TriviaParagraphFragment };
