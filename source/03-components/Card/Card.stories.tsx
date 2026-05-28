import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import Grid from '~layouts/Grid/Grid';
import CardComponent from './Card';
import styles from './card.module.css';
import cardArgs from './cardArgs';

const meta: Meta<typeof CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
    tags: {
      control: false,
    },
    media: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof CardComponent>;
const Default: Story = {
  args: cardArgs,
  decorators: [
    Component => (
      <Grid numCols={3}>
        <Component />
      </Grid>
    ),
  ],
};

const FeatureCard: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['card--feature'],
  },
};

export default meta;
export { Default, FeatureCard };
