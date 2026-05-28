import { Meta, StoryObj } from '@storybook/nextjs';
import BackToTopComponent from './BackToTop';
import styles from './back-to-top.module.css';
import backToTopArgs from './backToTopArgs';

const meta: Meta<typeof BackToTopComponent> = {
  title: 'Components/Back To Top',
  component: BackToTopComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof BackToTopComponent>;

const BackToTop: Story = {
  args: {
    ...backToTopArgs,
    modifierClasses: styles.show,
  },
  storyName: 'Back To Top',
};

export default meta;
export { BackToTop };
