import { Meta, StoryObj } from '@storybook/nextjs';
import AccordionComponent from './Accordion';
import accordionArgs from './accordionArgs';

const meta: Meta<typeof AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AccordionComponent>;

const Default: Story = {
  render: args => <AccordionComponent {...args} />,
  args: {
    ...accordionArgs,
  },
};

const StepList: Story = {
  render: args => <AccordionComponent {...args} />,
  args: {
    ...accordionArgs,
    isStepList: true,
  },
};

export default meta;
export { Default, StepList };
