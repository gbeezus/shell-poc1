import { Meta, StoryObj } from '@storybook/nextjs';
import Menu from './Menu';
import footerStyles from './menu-footer.module.css';
import menuArgs from './menuArgs';
import footerMenuArgs from './menuFooterArgs';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Menu>;
const Default: Story = {
  args: menuArgs,
};
const FooterMenu: Story = {
  args: {
    ...footerMenuArgs,
    modifierClasses: footerStyles.menu,
    itemClasses: footerStyles.item,
    linkClasses: footerStyles.link,
  },
};

export default meta;
export { Default, FooterMenu };
