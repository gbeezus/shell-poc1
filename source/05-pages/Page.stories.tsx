import { Meta, StoryObj } from '@storybook/nextjs';
import Breadcrumb from '~components/Breadcrumb/Breadcrumb';
import { Breadcrumb as BreadcrumbStory } from '~components/Breadcrumb/Breadcrumb.stories';
import Wysiwyg from '~components/Wysiwyg/Wysiwyg';
import { WYSIWYG as WysiwygStory } from '~components/Wysiwyg/Wysiwyg.stories';
import PageTemplate, { PageProps } from '~templates/Page/Page';
import PageWrapper from './page-wrappers/default';

interface PageStoryArgs {
  page: PageProps;
}

const settings: Meta<PageStoryArgs> = {
  title: 'Pages/Page',
};

const Page: StoryObj<PageStoryArgs> = {
  render: args => (
    <PageWrapper>
      <PageTemplate {...args.page} />
    </PageWrapper>
  ),
  args: {
    page: {
      preContent: <Breadcrumb {...BreadcrumbStory.args} />,
      title: 'Page Title',
      children: <Wysiwyg {...WysiwygStory.args} />,
    },
  },
};

export default settings;
export { Page };
