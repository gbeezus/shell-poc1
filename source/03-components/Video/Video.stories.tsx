import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import VideoComponent from './Video';
import videoArgs from './videoArgs';

const meta: Meta<typeof VideoComponent> = {
  title: 'Components/Video',
  component: VideoComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof VideoComponent>;
const Video: Story = {
  args: videoArgs,
};

export default meta;
export { Video };
