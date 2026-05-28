import '~/source/00-config/index.css';

import { Public_Sans } from 'next/font/google';
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

const publicSans = Public_Sans({
  display: 'auto',
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-public-sans',
});

function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html
      lang="en"
      className={`${sourceSansPro.variable} ${publicSans.variable}`}
    >
      <head>
        {/* The shell eats its own dog food: it loads the same brand overrides
            stylesheet it offers to the third party via Mechanism B. */}
        <link rel="stylesheet" href="/brand/overrides.css" />
      </head>
      <body id="top">
        <Skiplink />
        <SiteContainer>
          <Header>
            <SiteName siteName="Shell Application (POC 1 — CSS overlay)" />
            <ResponsiveMenu
              items={[
                { title: 'Home', url: '/' },
                { title: 'Tool', url: '/tool' },
                { title: 'Brand admin', url: '/admin/themes' },
              ]}
            />
          </Header>
          {children}
          <Footer>
            <Menu
              items={[
                { title: 'Home', url: '/' },
                { title: 'Tool', url: '/tool' },
                { title: 'Brand admin', url: '/admin/themes' },
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
