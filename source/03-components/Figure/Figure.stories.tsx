import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import Video from '~components/Video/Video';
import { Video as VideoStory } from '~components/Video/Video.stories';
import FigureComponent from './Figure';
import styles from './figure.module.css';
import figureArgs from './figureArgs';

const meta: Meta<typeof FigureComponent> = {
  title: 'Components/Figure',
  component: FigureComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FigureComponent>;

const Default: Story = {
  args: figureArgs,
};

const FigureCentered: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-center',
  },
};

const FigureLeftAligned: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-left',
  },
};

const FigureRightAligned: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-right',
  },
};

const FigureWithVideo: Story = {
  args: {
    media: <Video {...VideoStory.args} />,
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vel metus at cursus.',
    modifierClasses: styles['figure--iframe'],
  },
};

const FigureWithVideoCentered: Story = {
  args: {
    ...FigureWithVideo.args,
    modifierClasses: [styles['figure--iframe'], 'u-align-center'],
  },
};

const FigureWithVideoLeftAligned: Story = {
  args: {
    ...FigureWithVideo.args,
    modifierClasses: [styles['figure--iframe'], 'u-align-left'],
  },
};

const FigureWithVideoRightAligned: Story = {
  args: {
    ...FigureWithVideo.args,
    modifierClasses: [styles['figure--iframe'], 'u-align-right'],
  },
};

export default meta;
export {
  Default,
  FigureCentered,
  FigureLeftAligned,
  FigureRightAligned,
  FigureWithVideo,
  FigureWithVideoCentered,
  FigureWithVideoLeftAligned,
  FigureWithVideoRightAligned,
};
