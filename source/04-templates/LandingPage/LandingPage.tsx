import { JSX, ReactNode } from 'react';
import { MAIN_ID } from '~/source/00-config/constants';
import PageTitle from '~components/PageTitle/PageTitle';
import Main from '~layouts/Main/Main';

interface PageProps {
  mainId?: string;
  title: string;
  hidePageTitle?: boolean;
  children?: ReactNode;
}

function LandingPage({
  mainId = MAIN_ID,
  title,
  hidePageTitle,
  children,
}: PageProps): JSX.Element {
  return (
    <Main id={mainId}>
      {!hidePageTitle && title && <PageTitle pageTitle={title} />}
      {children}
    </Main>
  );
}

export default LandingPage;
