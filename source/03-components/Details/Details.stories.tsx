import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import DetailsComponent from './Details';
import detailsArgs from './detailsArgs';

const meta: Meta<typeof DetailsComponent> = {
  title: 'Components/Details',
  component: DetailsComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof DetailsComponent>;
const Details: Story = {
  args: detailsArgs,
};

export default meta;
export { Details };
