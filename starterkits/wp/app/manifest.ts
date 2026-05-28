import { LayoutMetadataQuery } from '@/types/__generated__/graphql';
import { getClient } from '@faustwp/experimental-app-router';
import { MetadataRoute } from 'next';
import layoutMetadataQuery from './layoutMetadataQuery';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const client = await getClient();
  const { data } = await client.query<LayoutMetadataQuery>({
    query: layoutMetadataQuery,
  });
  const title = data.generalSettings?.title || '';
  return {
    name: title,
    short_name: title,
    description: title,
    start_url: '/',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  };
}
