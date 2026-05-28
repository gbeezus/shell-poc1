/**
 * @file
 * Example integration of a film teaser.
 *
 * Headless sites don't use view modes, but fragments and components can be
 * reused the same way a view mode would be.
 */

import Image from 'next/image';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import ImageTeaser from '~components/ImageTeaser/ImageTeaser.tsx';

/**
 * Fragment for the film teaser. Compare with the fragment in FilmFull.tsx --
 * the fragment here gets the fields and image styles needed for the teaser,
 * which can be different from what's queried for in the full view. Each fragment
 * should only query the fields you need for that particular component.
 *
 * See FilmFull.tsx as well for comments on retrieving the image style.
 */
const FilmTeaserFragment = graphql(`
  fragment FilmTeaserFragment on NodeFilm {
    id
    title
    path
    poster {
      ... on MediaImage {
        id
        mediaImage {
          alt
          variations(styles: IMAGE_TEASER) {
            height
            url
            width
          }
        }
      }
    }
  }
`);

/**
 * Component to display the film teaser.
 *
 * Think of this as node--film--teaser.html.twig.
 */
function FilmTeaser({
  data,
}: {
  data: FragmentType<typeof FilmTeaserFragment>;
}) {
  const film = getFragmentData(FilmTeaserFragment, data);
  return (
    <ImageTeaser
      title={film.title}
      url={film.path.replace('/drupal', '')}
      image={
        film.poster &&
        film.poster.mediaImage &&
        film.poster.mediaImage.variations &&
        film.poster.mediaImage.variations[0] ? (
          <Image
            src={film.poster.mediaImage.variations[0].url}
            alt={film.poster.mediaImage.alt || ''}
            width={film.poster.mediaImage.variations[0].width}
            height={film.poster.mediaImage.variations[0].height}
            sizes="(min-width: 1333px) 440px, (min-width: 760px) 33vw, (min-width: 440px) 50vw, 100vw"
          />
        ) : undefined
      }
    />
  );
}

export default FilmTeaser;
export { FilmTeaserFragment };
