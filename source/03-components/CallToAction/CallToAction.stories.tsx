import { Meta, StoryObj } from '@storybook/nextjs';
import CallToActionComponent from './CallToAction';
import callToActionArgs from './callToActionArgs';

const meta: Meta<typeof CallToActionComponent> = {
  title: 'Components/Call To Action',
  component: CallToActionComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof CallToActionComponent>;
const CallToAction: Story = {
  args: callToActionArgs,
};

export default meta;
export { CallToAction };
