/**
 * @file
 * Example integration for a global footer.
 *
 * Also includes an example of retrieving a Custom Block from GraphQL.
 */

import parse from 'html-react-parser';
import { JSX } from 'react';
import FooterMenu from '~/app/navigation/FooterMenu';
import SocialMenu from '~/app/navigation/SocialMenu';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Footer from '~layouts/Footer/Footer';

/**
 * Fragment for the global footer.
 *
 * This includes the fragments for any included menus, the site name, and
 * a block. Content blocks are tricky to query for because the Drupal endpoint needs
 * the UUID for the block, not the machine name as in Twig Tweak. You can get
 * the UUID from /admin/content/block in Drupal. Under "Operations," click the
 * arrow to expand the dropdown and choose "Copy UUID."
 */
const GlobalFooterFragment = graphql(`
  fragment GlobalFooterFragment on Query {
    info {
      name
    }
    ...FooterMenuFragment
    ...SocialMenuFragment
    block(id: "block_content:6a2e16f5-9301-41a4-91a6-1e5a425a94ce") {
      __typename
      ... on BlockContent {
        id
        entity {
          ... on BlockContentBasic {
            id
            body {
              processed
            }
          }
        }
      }
    }
  }
`);

/**
 * Component for the global header.
 * You would include this in your layout.tsx file at the root level of
 * the app directory.
 *
 * Think of this as the equivalent to a region--footer.html.twig template.
 */
function GlobalFooter(props: {
  data: FragmentType<typeof GlobalFooterFragment>;
}): JSX.Element {
  const data = getFragmentData(GlobalFooterFragment, props.data);
  const currentYear = new Date().getFullYear();
  /**
   * This gets just the HTML content of the body field on the block.
   * It's like doing
   * {% set contact_block = content.body|field_value ? content.body|field_value : NULL %}
   */
  const contactBlock =
    data.block?.__typename === 'BlockContent' &&
    typeof data.block.entity.body?.processed === 'string'
      ? data.block.entity.body?.processed
      : undefined;

  /**
   * As with the GlobalHeader, what props you use here will depend on your
   * design and your Footer.tsx component in source.
   */
  return (
    <Footer
      year={currentYear}
      siteName={data.info?.name || ''}
      contact={
        typeof contactBlock === 'string' ? (
          <>{parse(contactBlock)}</>
        ) : undefined
      }
      socialMenu={<SocialMenu data={data} />}
      menu={<FooterMenu data={data} />}
    />
  );
}

export { GlobalFooterFragment };
export default GlobalFooter;
