import { Meta, StoryObj } from '@storybook/nextjs';
import MediaLayout from './Media';
import styles from './media.module.css';
import mediaArgs from './mediaArgs';

const meta: Meta<typeof MediaLayout> = {
  title: 'Layouts/Media',
  component: MediaLayout,
  argTypes: {
    media: {
      control: false,
    },
    mediaContent: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof MediaLayout>;

const Default: Story = {
  args: {
    ...mediaArgs,
  },
};

const Column: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['media--column'],
  },
};

const Reversed: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['media--reversed'],
  },
};

export default meta;
export { Column, Default, Reversed };
