import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import WysiwygComponent from './Wysiwyg';
import wysiwygArgs from './wysiwygArgs';

const meta: Meta<typeof WysiwygComponent> = {
  title: 'Components/WYSIWYG',
  component: WysiwygComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof WysiwygComponent>;
const WYSIWYG: Story = {
  args: wysiwygArgs,
};

export default meta;
export { WYSIWYG };
