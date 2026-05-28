import { Meta, StoryObj } from '@storybook/nextjs';
import HeroBgImage from './HeroBgImage';
import styles from './hero-bg-image.module.css';
import heroBgImageArgs from './heroBgImageArgs';

const meta: Meta<typeof HeroBgImage> = {
  title: 'Components/Hero/Hero With Background Image',
  component: HeroBgImage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HeroBgImage>;
const Default: Story = {
  args: heroBgImageArgs,
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
