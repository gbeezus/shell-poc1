import { Meta, StoryObj } from '@storybook/nextjs';
import SiteContainerLayout from './SiteContainer';
import siteContainerArgs from './siteContainerArgs';

const meta: Meta<typeof SiteContainerLayout> = {
  title: 'Layouts/Site Container',
  component: SiteContainerLayout,
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
};

type Story = StoryObj<typeof SiteContainerLayout>;

const SiteContainer: Story = {
  args: siteContainerArgs,
};

export default meta;
export { SiteContainer };
