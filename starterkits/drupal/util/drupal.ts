import { DrupalClient } from 'next-drupal';

const drupal = new DrupalClient(process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || '', {
  auth: {
    clientId: process.env.DRUPAL_CLIENT_ID || '',
    clientSecret: process.env.DRUPAL_CLIENT_SECRET || '',
  },
  fetcher(baseUrl, options) {
    const url = baseUrl instanceof Request ? baseUrl.url : baseUrl.toString();
    // Opt out Next.js's data caching for Oauth Token requests.
    // Otherwise, new fetches return the old expired token.
    // This can be changed once Next.js 15 is out.
    if (url.includes('oauth') || url.includes('preview-url')) {
      return fetch(baseUrl, {
        ...options,
        cache: 'no-store',
      });
    }
    return fetch(baseUrl, options);
  },
});

export default drupal;
