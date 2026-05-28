import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import entityIsType from '~/util/entityIsType';
import Accordion from '~components/Accordion/Accordion';

const AccordionItemParagraphFragment = graphql(`
  fragment AccordionItemParagraphFragment on ParagraphAccordionItem {
    id
    accordionHeading: title
    accordionBody: wysiwyg {
      processed
    }
  }
`);

const AccordionParagraphFragment = graphql(`
  fragment AccordionParagraphFragment on ParagraphAccordion {
    id
    accordionItems: paragraphs {
      __typename
      ...AccordionItemParagraphFragment
    }
  }
`);

function AccordionParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof AccordionParagraphFragment>;
}) {
  const accordionParagraph = getFragmentData(
    AccordionParagraphFragment,
    paragraph,
  );
  const items = accordionParagraph.accordionItems
    .filter(i =>
      entityIsType<
        {
          __typename: 'ParagraphAccordionItem';
        } & FragmentType<typeof AccordionItemParagraphFragment>
      >(i, 'ParagraphAccordionItem'),
    )
    .map(item => {
      const accordionItem = getFragmentData(
        AccordionItemParagraphFragment,
        item,
      );
      return {
        id: accordionItem.id,
        title: accordionItem.accordionHeading,
        content:
          accordionItem.accordionBody &&
          typeof accordionItem.accordionBody?.processed === 'string'
            ? accordionItem.accordionBody.processed
            : '',
      };
    });
  return <Accordion accordionItems={items} />;
}

export default AccordionParagraph;
export { AccordionParagraphFragment };
