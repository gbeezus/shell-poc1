import parse from 'html-react-parser';
import { JSX } from 'react';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Wysiwyg from '~components/Wysiwyg/Wysiwyg';
import Page from '~templates/Page/Page';

const BasicPageFragment = graphql(`
  fragment BasicPageFragment on NodePage {
    title
    body {
      processed
    }
  }
`);

function BasicPageFull(props: {
  entity: FragmentType<typeof BasicPageFragment>;
}): JSX.Element {
  const page = getFragmentData(BasicPageFragment, props.entity);
  return (
    <Page title={page.title}>
      {page.body && typeof page.body.processed === 'string' ? (
        <Wysiwyg>{parse(page.body.processed)}</Wysiwyg>
      ) : null}
    </Page>
  );
}

export { BasicPageFragment };
export default BasicPageFull;
