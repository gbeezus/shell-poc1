import { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from '~components/Button/Button';
import Constrain from '~layouts/Constrain/Constrain';
import ModalComponent from './Modal';
import modalArgs from './modalArgs';

const meta: Meta<typeof ModalComponent> = {
  title: 'Components/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ModalComponent>;

const Default: Story = {
  render: args => <ModalComponent {...args} />,
  args: modalArgs,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-5">
        <Button label="Open Modal" aria-controls="modal-1234"></Button>
        <Component />
      </Constrain>
    ),
  ],
};

export default meta;
export { Default };
