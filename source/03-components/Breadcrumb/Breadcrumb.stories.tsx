import { Meta, StoryObj } from '@storybook/nextjs';
import BreadcrumbComponent from './Breadcrumb';
import breadcrumbArgs from './breadcrumbArgs';

const meta: Meta<typeof BreadcrumbComponent> = {
  title: 'Components/Breadcrumb',
  component: BreadcrumbComponent,
  tags: ['autodocs'],
  argTypes: {
    breadcrumb: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof BreadcrumbComponent>;

const Breadcrumb: Story = {
  args: breadcrumbArgs,
};

export default meta;
export { Breadcrumb };
