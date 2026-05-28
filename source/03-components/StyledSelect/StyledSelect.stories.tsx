import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import StyledSelectComponent from './StyledSelect';
import styledSelectArgs from './styledSelectArgs';
import withGroupsArgs from './withGroupsArgs';

const meta: Meta<typeof StyledSelectComponent> = {
  title: 'Components/Styled Select',
  component: StyledSelectComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof StyledSelectComponent>;
const StyledSelect: Story = {
  args: styledSelectArgs,
};
const WithGroups: Story = {
  args: withGroupsArgs,
};

export default meta;
export { StyledSelect, WithGroups };
