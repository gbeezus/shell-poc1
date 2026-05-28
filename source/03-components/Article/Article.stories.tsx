import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import ArticleComponent from './Article';
import articleArgs from './articleArgs';

const meta: Meta<typeof ArticleComponent> = {
  title: 'Components/Article',
  component: ArticleComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
};

type Story = StoryObj<typeof ArticleComponent>;

const Article: Story = {
  args: articleArgs,
};

export default meta;
export { Article };
