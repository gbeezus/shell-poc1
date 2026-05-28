import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import { Textarea } from './FormItem';
import textareaArgs from './textareaArgs';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form Item/Textarea',
  component: Textarea,
  decorators: [withGlobalWrapper],
  args: {
    labelDisplay: 'before',
    prefix: '',
    suffix: '',
    description: 'The description for this form field.',
    descriptionDisplay: 'after',
    errors: '',
    isDisabled: false,
    isFullWidth: false,
    isRequired: false,
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof Textarea>;
const Default: Story = {
  args: {
    ...textareaArgs,
  },
};

export default meta;
export { Default };
