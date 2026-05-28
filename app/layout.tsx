import '~/source/00-config/index.css';

import { JSX, PropsWithChildren } from 'react';
import BackToTop from '~components/BackToTop/BackToTop';
import Menu from '~components/Menu/Menu';
import ResponsiveMenu from '~components/Menu/ResponsiveMenu/ResponsiveMenu';
import footerStyles from '~components/Menu/menu-footer.module.css';
import SiteName from '~components/SiteName/SiteName';
import Skiplink from '~components/Skiplink/Skiplink';
import sourceSansPro from '~global/fonts/source-sans';
import '~global/index.css';
import Footer from '~layouts/Footer/Footer';
import Header from '~layouts/Header/Header';
import SiteContainer from '~layouts/SiteContainer/SiteContainer';
import '~utility/index.css';

function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en" className={sourceSansPro.variable}>
      <body id="top">
        <Skiplink />
        <SiteContainer>
          <Header>
            <SiteName siteName="NextJS Starter" />
            <ResponsiveMenu
              items={[
                {
                  title: 'Home',
                  url: '/',
                },
                {
                  title: 'About',
                  url: '/about',
                },
              ]}
            />
          </Header>
          {/* Breadcrumb */}
          {children}
          <Footer>
            <Menu
              items={[
                {
                  title: 'Home',
                  url: '/',
                },
                {
                  title: 'About',
                  url: '/about',
                },
              ]}
              modifierClasses={footerStyles.menu}
              itemClasses={footerStyles.item}
            />
          </Footer>
        </SiteContainer>
        <BackToTop text="Back to Top" topElement="top" />
      </body>
    </html>
  );
}

export default RootLayout;
