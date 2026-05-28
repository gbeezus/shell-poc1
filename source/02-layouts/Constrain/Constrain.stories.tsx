import { Meta, StoryObj } from '@storybook/nextjs';
import SampleContent from '~utility/storybook/SampleContent';
import ConstrainLayout from './Constrain';
import constrainArgs from './constrainArgs';

const meta: Meta<typeof ConstrainLayout> = {
  title: 'Layouts/Constrain',
  component: ConstrainLayout,
};

type Story = StoryObj<typeof ConstrainLayout>;

const Constrain: Story = {
  render: args => (
    <ConstrainLayout {...args}>
      <SampleContent>Constrain Layout Content</SampleContent>
    </ConstrainLayout>
  ),
  args: constrainArgs,
};
export default meta;
export { Constrain };
