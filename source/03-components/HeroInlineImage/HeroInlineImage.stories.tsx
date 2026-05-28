import { Meta, StoryObj } from '@storybook/nextjs';
import HeroInlineImage from './HeroInlineImage';
import styles from './hero-inline-image.module.css';
import heroInlineImageArgs from './heroInlineImageArgs';

const meta: Meta<typeof HeroInlineImage> = {
  title: 'Components/Hero/Hero With Inline Image',
  component: HeroInlineImage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HeroInlineImage>;
const Default: Story = {
  args: heroInlineImageArgs,
};
const Left: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['has-content-left'],
  },
};
const Right: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['has-content-right'],
  },
};

export default meta;
export { Default, Left, Right };
