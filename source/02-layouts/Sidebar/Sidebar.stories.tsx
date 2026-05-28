import { Meta, StoryObj } from '@storybook/nextjs';
import SampleContent from '~utility/storybook/SampleContent';
import SidebarLayout from './Sidebar';
import sidebarArgs from './sidebarArgs';

const meta: Meta<typeof SidebarLayout> = {
  title: 'Layouts/Sidebar',
  component: SidebarLayout,
  argTypes: {
    header: {
      options: ['Show', 'Hide'],
      mapping: {
        Show: <SampleContent>Header Content</SampleContent>,
        Hide: false,
      },
      control: {
        type: 'select',
      },
    },
    sidebarFirst: {
      options: ['Show', 'Hide'],
      mapping: {
        Show: <SampleContent>Optional Sidebar Content</SampleContent>,
        Hide: false,
      },
      control: {
        type: 'select',
      },
    },
    main: {
      options: ['Show', 'Hide'],
      mapping: {
        Show: <SampleContent>Main Content</SampleContent>,
        Hide: false,
      },
      control: {
        type: 'select',
      },
    },
    sidebarSecond: {
      options: ['Show', 'Hide'],
      mapping: {
        Show: <SampleContent>Optional Sidebar Content</SampleContent>,
        Hide: false,
      },
      control: {
        type: 'select',
      },
    },
  },
};

type Story = StoryObj<typeof SidebarLayout>;

const Sidebar: Story = {
  args: {
    ...sidebarArgs,
    header: 'Show',
    sidebarFirst: 'Show',
    main: 'Show',
    sidebarSecond: 'Show',
  },
};

export default meta;
export { Sidebar };
