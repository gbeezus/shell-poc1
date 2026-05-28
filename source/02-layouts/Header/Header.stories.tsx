import { Meta, StoryObj } from '@storybook/nextjs';
import SampleContent from '~utility/storybook/SampleContent';
import HeaderLayout from './Header';
import headerArgs from './headerArgs';

const meta: Meta<typeof HeaderLayout> = {
  title: 'Layouts/Header',
  component: HeaderLayout,
};

type Story = StoryObj<typeof HeaderLayout>;
const Header: Story = {
  render: args => (
    <HeaderLayout {...args}>
      <SampleContent>Header Layout Content</SampleContent>
    </HeaderLayout>
  ),
  args: headerArgs,
};

export default meta;
export { Header };
