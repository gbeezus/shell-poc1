import { Meta, StoryObj } from '@storybook/nextjs';
import PagerComponent from './Pager';
import pagerArgs from './pagerArgs';

const settings: Meta<typeof PagerComponent> = {
  title: 'Components/Pager',
  component: PagerComponent,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

const Pager: StoryObj<typeof PagerComponent> = {
  args: pagerArgs,
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/',
        query: {
          page: '6',
        },
      },
    },
  },
};

export default settings;
export { Pager };
