import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import SiteNameComponent from './SiteName';
import siteNameArgs from './siteNameArgs';

const meta: Meta<typeof SiteNameComponent> = {
  title: 'Components/Site Name',
  component: SiteNameComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof SiteNameComponent>;
const SiteName: Story = {
  args: siteNameArgs,
};

export default meta;
export { SiteName };
