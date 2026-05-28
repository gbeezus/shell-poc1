/**
 * @file
 * Example integration for a social media menu.
 *
 * This shows an integration using Menu Item Extras in Drupal to add a field
 * to each menu item, which is then mapped to an icon using the Icon component.
 */

import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Menu, { MenuItem } from '~components/Menu/Menu';
import styles from '~components/Menu/menu-social.module.css';
import Icons from '~global/icon/icons';

/**
 * Fragment for the menu items. You may need to use the beta version of the
 * GraphQL Compose module in Drupal in order to support Menu Items Extra fields
 * being included.
 */
const SocialMenuFragment = graphql(`
  fragment SocialMenuFragment on Query {
    socialMenu: menu(name: SOCIAL_MEDIA) {
      items {
        extras {
          __typename
          ... on MenuLinkContentSocialMedium {
            icon
          }
        }
        id
        url
        title
      }
    }
  }
`);

/**
 * Utility function to test if a string (like the value returned by GraphQL)
 * matches one of the available icons. If you were going to use this on a project,
 * you'd probably want to move it to /utils.
 */
function isIconKey(possKey: string): possKey is keyof typeof Icons {
  return Object.keys(Icons).includes(possKey);
}

function SocialMenu(props: { data: FragmentType<typeof SocialMenuFragment> }) {
  const data = getFragmentData(SocialMenuFragment, props.data);
  const menuItems =
    /**
     * Since we're not using prepMenuItems() here because we want more control
     * over the menu item output, we still have to filter out any items that
     * somehow don't exist. Otherwise, TypeScript will complain.
     */
    data?.socialMenu?.items
      .map((menuItem): MenuItem | null => {
        if (!menuItem || typeof menuItem.url !== 'string') {
          return null;
        }
        if (
          menuItem.extras.__typename === 'MenuLinkContentSocialMedium' &&
          menuItem.extras.icon &&
          isIconKey(menuItem.extras.icon)
        ) {
          /**
           * Replaces the menu text with the icon component if a matching icon
           * exists. Pulling in the entire Icons index file lets us grab a
           * particular icon based on a dynamic value (here, the icon field
           * returned by the query). If we knew in advance what icon we needed,
           * (e.g. it would always be a Chevron), we could just import and use
           * that icon like normal.
           */
          const MenuIcon = Icons[menuItem.extras.icon];
          if (MenuIcon) {
            return {
              title: <MenuIcon title={menuItem.title} />,
              url: menuItem.url,
            };
          }
        }
        return {
          title: menuItem.title,
          url: menuItem.url,
        };
      })
      .filter((item): item is MenuItem => item !== null) || [];
  return (
    <Menu
      items={menuItems}
      modifierClasses={styles.menu}
      itemClasses={styles.item}
    />
  );
}

export { SocialMenuFragment };
export default SocialMenu;
