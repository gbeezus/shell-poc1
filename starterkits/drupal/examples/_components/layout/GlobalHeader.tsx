/**
 * @file
 * Example integration for global header.
 */

import { JSX } from 'react';
import MainMenu from '~/app/_navigation/MainMenu';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import SiteName from '~components/SiteName/SiteName';
import Header from '~layouts/Header/Header';

/**
 * Fragment for the global header.
 * It includes fragments for any menus, plus fields needed for the site name.
 */
const GlobalHeaderFragment = graphql(`
  fragment GlobalHeaderFragment on Query {
    info {
      name
    }
    ...MainMenuFragment
  }
`);

/**
 * Component for the global header.
 * You would include this in your layout.tsx file at the root level of
 * the app directory.
 *
 * Think of this as the equivalent to a region--header.html.twig template.
 */
function GlobalHeader(props: {
  data: FragmentType<typeof GlobalHeaderFragment>;
}): JSX.Element {
  const data = getFragmentData(GlobalHeaderFragment, props.data);

  /**
   * The props here assume that the Header.tsx in the source directory has
   * two slots expecting ReactNodes, one for the site branding and one for
   * the primary/main menu. What you pass in and what it's called will depend
   * on your design and front-end component.
   */
  return (
    <Header
      branding={
        data.info?.name ? <SiteName siteName={data.info.name} /> : undefined
      }
      primary={<MainMenu data={data} />}
    />
  );
}

export default GlobalHeader;
export { GlobalHeaderFragment };
