import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import ReadMoreLinkComponent from './ReadMoreLink';
import readMoreLinkArgs from './readMoreLinkArgs';

const meta: Meta<typeof ReadMoreLinkComponent> = {
  title: 'Components/Read More Link',
  component: ReadMoreLinkComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ReadMoreLinkComponent>;
const ReadMoreLink: Story = {
  args: readMoreLinkArgs,
};

export default meta;
export { ReadMoreLink };
