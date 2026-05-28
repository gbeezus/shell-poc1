import { JSX, ReactNode } from 'react';
import { MAIN_ID } from '~/source/00-config/constants';
import Article from '~components/Article/Article';
import Main from '~layouts/Main/Main';

interface PageProps {
  mainId?: string;
  title: string;
  children?: ReactNode;
  preContent?: ReactNode;
}

function Page({
  title,
  children,
  mainId = MAIN_ID,
  preContent,
}: PageProps): JSX.Element {
  return (
    <>
      {preContent}
      <Main id={mainId}>
        <Article title={title} showFooter={false}>
          {children}
        </Article>
      </Main>
    </>
  );
}

export default Page;
export type { PageProps };
