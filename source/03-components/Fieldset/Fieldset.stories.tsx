import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import FieldsetComponent from './Fieldset';
import styles from './fieldset.module.css';
import fieldsetArgs from './fieldsetArgs';

const meta: Meta<typeof FieldsetComponent> = {
  title: 'Components/Fieldset',
  component: FieldsetComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof FieldsetComponent>;
const Fieldset: Story = {
  args: {
    ...fieldsetArgs,
    modifierClasses: styles['fieldset--default'],
  },
};

export default meta;
export { Fieldset };
