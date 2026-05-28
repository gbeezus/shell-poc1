/**
 * @file
 * Example integration for the detail page of a film content type.
 *
 * Also includes examples of retrieving a specific image style from Drupal and
 * of a content field that uses Paragraphs.
 */

import Image from 'next/image';
import { JSX } from 'react';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Film from '~templates/Film/Film';
import mapParagraph from '../paragraphs/mapParagraph';

/**
 * Fragment for the film detail page. In addition to getting all the basic
 * fields we need from the content type, the fragment includes the possible
 * paragraphs (using the fragment above). As you can see throughout the examples,
 * fragments can be nested one inside the other until you finally get to the
 * page level, where you want to run the query.
 *
 * The poster field is a Media entity of type Image. The query retrieves both
 * the URL to the original image and the URL, width, and height of a specific
 * image style (also called Poster). In this example, we're using the original
 * image as-is in the hero and the scaled and cropped version as a thumbnail.
 *
 * Note that we're retrieving a regular image style here, not a responsive image
 * style. If you use the next/image component to render the image and provide
 * the sizes attribute, Next.js will take care of the responsive aspect. Thus,
 * you probably want your image style in Drupal to be whatever the largest size
 * is that you'll need.
 */
const FilmDetailPageFragment = graphql(`
  fragment FilmDetailPageFragment on NodeFilm {
    title
    summary: body {
      processed
    }
    director
    releaseYear
    title
    poster {
      ... on MediaImage {
        id
        status
        mediaImage {
          alt
          variations(styles: POSTER) {
            height
            url
            width
            name
          }
          url
        }
      }
    }
    content {
      __typename
      ...FilmParagraphsFragment
    }
  }
`);

/**
 * Component to display the Film detail page.
 *
 * Think of this as node--film--full.html.twig.
 */
function FilmDetailPage(props: {
  entity: FragmentType<typeof FilmDetailPageFragment>;
}): JSX.Element {
  const film = getFragmentData(FilmDetailPageFragment, props.entity);

  return (
    <Film
      title={film.title}
      director={film.director}
      releaseYear={film.releaseYear}
      summary={film.summary}
      /**
       * Uses the Image component from next/image to turn the data received from
       * GraphQL into an image tag. Any image not uploaded to your /public directory
       * (including any coming from Drupal or a CDN) must have a width and height
       * specified or use the fill attribute, which will absolutely position the image
       * so that it fills its parent. Since the Drupal image is the largest possible size,
       * including accounting for 2x display, the width and height are half that.
       */
      image={
        film?.poster && film.poster.mediaImage.variations ? (
          <Image
            src={film.poster.mediaImage.variations[0].url}
            alt={film.poster.mediaImage.alt || ''}
            width={film.poster.mediaImage.variations[0].width / 2}
            height={film.poster.mediaImage.variations[0].height / 2}
            sizes="(min-width: 700px) 285px, 70vw"
          />
        ) : undefined
      }
      heroImage={
        film?.poster ? (
          <Image
            src={film.poster.mediaImage.url}
            alt={film.poster.mediaImage.alt || ''}
            fill={true}
            sizes="100vw"
            priority={true}
          />
        ) : undefined
      }
    >
      {/*
        This renders all the paragraphs. The mapParagraph() utility in
        _paragraphs is what links each paragraph type to the appropriate
        template. See the examples _paragraphs template for more.
      */}
      {film.content && film.content.map(mapParagraph)}
    </Film>
  );
}

export default FilmDetailPage;
export { FilmDetailPageFragment };
