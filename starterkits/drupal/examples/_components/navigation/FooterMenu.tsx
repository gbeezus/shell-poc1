/**
 * @file
 * Example integration for a simple one-level menu, such as in a footer.
 */

import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import { prepMenuItems } from '~/util/prepMenuItems';
import Menu from '~components/Menu/Menu';
/**
 * The styles are imported here in order to pass the footer-specific class names
 * into the Menu component. Another option would be to create a component for
 * the footer menu in Storybook and import it instead of the generic Menu.
 */
import styles from '~components/Menu/menu-footer.module.css';

/**
 * Fragment for the footer menu items.
 *
 * See MainMenu.tsx for more on menu fragments.
 */
const FooterMenuFragment = graphql(`
  fragment FooterMenuFragment on Query {
    footerMenu: menu(name: FOOTER) {
      items {
        ...MenuItemFragment
      }
    }
  }
`);

/**
 * Component to render the menu items. This is used inside _layout/GlobalFooter.
 *
 * See comment in MainMenu.tsx about prepMenuItems().
 *
 * Think of this as menu--footer.html.twig.
 */
function FooterMenu(props: { data: FragmentType<typeof FooterMenuFragment> }) {
  const data = getFragmentData(FooterMenuFragment, props.data);
  const menuItems = prepMenuItems(data?.footerMenu?.items);
  return (
    <Menu
      items={menuItems}
      itemClasses={styles.item}
      linkClasses={styles.link}
    />
  );
}

export { FooterMenuFragment };
export default FooterMenu;
