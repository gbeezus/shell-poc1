import { ReactNode, type JSX } from 'react';
import BackToTop from '~components/BackToTop/BackToTop';
import Menu from '~components/Menu/Menu';
import { FooterMenu as FooterMenuStory } from '~components/Menu/Menu.stories';
import ResponsiveMenu from '~components/Menu/ResponsiveMenu/ResponsiveMenu';
import { ResponsiveMenu as ResponsiveMenuStory } from '~components/Menu/ResponsiveMenu/ResponsiveMenu.stories';
import SiteName from '~components/SiteName/SiteName';
import { SiteName as SiteNameStory } from '~components/SiteName/SiteName.stories';
import Skiplink from '~components/Skiplink/Skiplink';
import Footer from '~layouts/Footer/Footer';
import Header from '~layouts/Header/Header';
import SiteContainer from '~layouts/SiteContainer/SiteContainer';

interface PageWrapperProps {
  children?: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps): JSX.Element {
  return (
    <>
      <Skiplink />
      <SiteContainer>
        <Header>
          <SiteName
            siteName={SiteNameStory.args?.siteName || ''}
            {...SiteNameStory.args}
          />
          <ResponsiveMenu
            items={ResponsiveMenuStory.args?.items || []}
            {...ResponsiveMenuStory.args}
          />
        </Header>
        {children}
        <Footer>
          <Menu
            items={FooterMenuStory.args?.items || []}
            {...FooterMenuStory.args}
          />
        </Footer>
      </SiteContainer>
      <BackToTop text="Back to Top" topElement="top" />
    </>
  );
}

export default PageWrapper;
