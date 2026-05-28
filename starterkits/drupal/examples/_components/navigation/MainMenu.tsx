/**
 * @file
 * Example integration for a responsive main menu with additional items
 * shown on mobile.
 */

import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import { prepMenuItems } from '~/util/prepMenuItems';
import { MenuItem as GessoMenuItem } from '~components/Menu/Menu';
import ResponsiveMenu from '~components/Menu/ResponsiveMenu/ResponsiveMenu';

/**
 * Fragment for the main menu.
 * This example fragment gets the items for both the main menu and the utility
 * menu so that the utility menu items can be included on mobile.
 *
 * See the FooterMenu.tsx example for a fragment that just gets one menu.
 *
 * The (name: MENU_NAME) is what specifies which menu to get by its name in
 * Drupal. The nameMenu gives it an alias, because GraphQL won't allow two items
 * called menu that return different content.
 */
const MainMenuFragment = graphql(`
  fragment MainMenuFragment on Query {
    mainMenu: menu(name: MAIN) {
      items {
        ...MenuItemFragment
      }
    }
    utilityMenu: menu(name: UTILITY) {
      items {
        ...MenuItemFragment
      }
    }
  }
`);

/**
 * Component to render the menu items. This is used inside _layout/GlobalHeader.
 *
 * Note the use of prepMenuItems() before passing the menu items to the template.
 * This is a utility function located in /utils/drupal that does some cleanup
 * from what Drupal gives us to what Gesso for React expects. This utility relies
 * on MenuItemFragment.ts existing though, so don't remove it unless you aren't
 * using Drupal menus at all for your site.
 *
 * Think of this as menu--main.html.twig.
 */
function MainMenu(props: { data: FragmentType<typeof MainMenuFragment> }) {
  const data: MainMenuFragmentFragment = getFragmentData(
    MainMenuFragment,
    props.data,
  );
  const menuItems = prepMenuItems(data.mainMenu?.items);

  /**
   * If you wanted to show additional menu items on mobile only, you would also
   * need to modifiy the ResponsiveMenu.tsx component in source to accept a
   * mobileItems prop and display those menu items as desired.
   */
  const mobileItems: GessoMenuItem[] = prepMenuItems(data.utilityMenu?.items);
  return <ResponsiveMenu items={menuItems} mobileItems={mobileItems} />;
}

export default MainMenu;
