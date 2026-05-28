import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import TagListComponent from './TagList';
import tagListArgs from './tagListArgs';

const meta: Meta<typeof TagListComponent> = {
  title: 'Components/Tag List',
  component: TagListComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TagListComponent>;
const TagList: Story = {
  args: tagListArgs,
};

export default meta;
export { TagList };
