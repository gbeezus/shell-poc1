import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import { Select } from './FormItem';
import selectArgs from './selectArgs';
import withGroupArgs from './selectWithGroups';

const meta: Meta<typeof Select> = {
  title: 'Components/Form Item/Select',
  component: Select,
  decorators: [withGlobalWrapper],
  args: {
    labelDisplay: 'before',
    descriptionDisplay: 'after',
    isDisabled: false,
    isFullWidth: false,
    isRequired: false,
    description: 'The description for this form field.',
    errors: '',
    prefix: '',
    suffix: '',
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

type Story = StoryObj<typeof Select>;
const Default: Story = {
  args: selectArgs,
};
const WithGroups: Story = {
  args: withGroupArgs,
};

export default meta;
export { Default, WithGroups };
