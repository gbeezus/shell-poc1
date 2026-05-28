import mapParagraph from '~/app/_components/paragraphs/mapParagraph';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Page from '~templates/Page/Page';

const LandingPageFragment = graphql(`
  fragment LandingPageFragment on NodeLandingPage {
    title
    content {
      __typename
      ...AllParagraphsFragment
    }
  }
`);

function LandingPageDetailPage(props: {
  entity: FragmentType<typeof LandingPageFragment>;
}) {
  const page = getFragmentData(LandingPageFragment, props.entity);

  return (
    <Page title={page.title}>
      {page.content ? page.content.map(mapParagraph) : null}
    </Page>
  );
}

export default LandingPageDetailPage;
export { LandingPageFragment };
