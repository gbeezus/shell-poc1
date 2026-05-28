import { Meta, StoryObj } from '@storybook/nextjs';
import ResponsiveMenuComponent from './ResponsiveMenu';
import responsiveMenuArgs from './responsiveMenuArgs';

const meta: Meta<typeof ResponsiveMenuComponent> = {
  title: 'Components/Menu/Responsive Menu',
  component: ResponsiveMenuComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ResponsiveMenuComponent>;
const ResponsiveMenu: Story = {
  args: responsiveMenuArgs,
};

export default meta;
export { ResponsiveMenu };
