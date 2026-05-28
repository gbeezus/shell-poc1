/**
 * Replace an image URL coming from WordPress with the internal domain, if one
 * has been set in the .env file.
 * @param sourceUrl - Original URL, as returned by GraphQL
 */
function normalizeImageUrl(sourceUrl: string): string {
  const normalizedUrl = new URL(sourceUrl);
  if (
    process.env.WORDPRESS_INTERNAL_IMAGE_HOSTNAME &&
    normalizedUrl.hostname === process.env.WORDPRESS_IMAGE_HOSTNAME
  ) {
    normalizedUrl.protocol = 'http:';
    normalizedUrl.hostname = process.env.WORDPRESS_INTERNAL_IMAGE_HOSTNAME;
  }
  return normalizedUrl.toString();
}

export default normalizeImageUrl;
