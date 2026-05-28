/**
 * @file
 * Component to integrate a paginated view of films.
 */

import { JSX, Suspense } from 'react';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import entityIsType from '~/util/entityIsType';
import Pager from '~components/Pager/Pager';
import ListingPage from '~templates/ListingPage/ListingPage;';
import FilmTeaser, { FilmTeaserFragment } from '../content/FilmTeaser';

/**
 * Fragment to query the films_listing view. The view would need to be set up
 * on the Drupal side to use a GraphQL output.
 */
const FilmsListingFragment = graphql(`
  fragment FilmsListingFragment on Query {
    filmsListing(page: $page) {
      pageInfo {
        total
        page
        pageSize
        offset
      }
      results {
        __typename
        ... on NodeFilm {
          id
        }
        ...FilmTeaserFragment
      }
    }
  }
`);

/**
 * Component to display a view with a pager. This example uses a ListingPage
 * template that would be located in source/04-templates, but you could also
 * create a component for the view in source/03-components, particularly if
 * you wanted to include other components on the page.
 */
function FilmsListing({
  data,
  page,
}: {
  data: FragmentType<typeof FilmsListingFragment>;
  page: number;
}): JSX.Element {
  const listing = getFragmentData(FilmsListingFragment, data);
  const totalResults = listing?.pageInfo?.total;
  const pageSize = listing?.pageInfo?.pageSize;
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <ListingPage title="Films" pager={<Pager totalPages={totalPages} />}>
      {/*
        Using a Suspense here creates a boundary so that the entire page
        does not have to re-render when the results change (e.g. you move from
        one page to the next. In many cases, you may also want to specify a
        fallback prop that will control what displays while content is loading.
        See https://react.dev/reference/react/Suspense
       */}
      <Suspense key={page}>
        {listing.filmsListing?.results ? (
          listing.filmsListing.results
            .filter(r =>
              entityIsType<
                {
                  __typename: 'NodeFilm';
                  id: string;
                } & FragmentType<typeof FilmTeaserFragment>
              >(r, 'NodeFilm'),
            )
            .map(film =>
              film.__typename === 'NodeFilm' && film?.id ? (
                <>
                  {/*
                    What to render for each result. In this example, it's the
                    equivalent of rendering the content using the teaser view mode
                    with no default classes or outer wrappers for each row.
                   */}
                  <FilmTeaser key={film.id} data={film} />
                </>
              ) : null,
            )
        ) : (
          <>
            {/* What to render when the view has no results. */}
            <p>No films have been added yet.</p>
          </>
        )}
      </Suspense>
    </ListingPage>
  );
}

export default FilmsListing;
