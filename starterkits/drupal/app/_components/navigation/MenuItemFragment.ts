import { graphql } from '~/types/__generated__';

const MenuItemFragment = graphql(`
  fragment MenuItemFragment on MenuItem {
    title
    id
    url
    attributes {
      class
    }
    internal
  }
`);

export default MenuItemFragment;
