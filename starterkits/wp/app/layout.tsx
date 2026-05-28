import '~/source/00-config/index.css';

import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { FaustProvider } from '@faustwp/experimental-app-router/ssr';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import ClientProvider from '~/app/ClientProvider';
import layoutMetadataQuery from '~/app/layoutMetadataQuery';
import '~/faust.config.js';
import {
  GetLayoutQuery,
  LayoutMetadataQuery,
} from '~/types/__generated__/graphql';
import { arrayFromAcf } from '~/util/wp/acfTools';
import BackToTop from '~components/BackToTop/BackToTop';
import Menu from '~components/Menu/Menu';
import sourceSansPro from '~global/fonts/source-sans';
import '~global/index.css';
import Footer from '~layouts/Footer/Footer';
import Header from '~layouts/Header/Header';
import SiteContainer from '~layouts/SiteContainer/SiteContainer';
import addBasePath from '~utility/addBasePath';
import '~utility/index.css';

export async function generateMetadata(): Promise<Metadata> {
  const client = await getClient();
  const { data } = await client.query<LayoutMetadataQuery>({
    query: layoutMetadataQuery,
  });
  const title = data.generalSettings?.title || '';
  return {
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#manifest
    // manifest: addBasePath('/site.webmanifest'),
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
    icons: {
      icon: [
        { url: addBasePath('/favicon.ico') },
        {
          url: addBasePath('/favicon-16x16.png'),
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: addBasePath('/favicon-32x32.png'),
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      apple: addBasePath('/apple-touch-icon.png'),
      // TODO: Add mask-icon for safari-pinned-tab.svg?
    },
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const client = await getClient();

  const { data } = await client.query<GetLayoutQuery>({
    query: gql`
      query GetLayout {
        primaryMenuItems: menuItems(where: { location: PRIMARY }) {
          nodes {
            id
            label
            uri
          }
        }
      }
    `,
  });

  if (!data.primaryMenuItems) {
    throw new Error('Query failed.');
  }

  return (
    <html lang="en" className={sourceSansPro.variable}>
      <body>
        <SiteContainer>
          <FaustProvider>
            <ClientProvider>
              <Header>
                <Menu
                  items={arrayFromAcf(data.primaryMenuItems.nodes).map(el => ({
                    title: el.label || '',
                    url: el.uri || '',
                  }))}
                />
              </Header>
              {children}
              <Footer />
            </ClientProvider>
          </FaustProvider>
        </SiteContainer>
        <BackToTop text="Back to Top" topElement="top" />
      </body>
    </html>
  );
}
