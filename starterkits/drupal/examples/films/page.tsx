/**
 * @file
 *
 * Example query and integration for a films listing page.
 */
import { graphql } from '~/types/__generated__';
import query from '~/util/query';
import FilmsListing from '../views/FilmsListing';

/**
 * Query to get the view results for a single page. If there were any other
 * components displayed on the page besides the view, those fragments would
 * go here as well.
 *
 * The ($page: Int = 10) defines a variable, $page, with a default value of 10,
 * that's then used in the filmsListing fragment.
 * See https://graphql.org/learn/queries/#variables for more on variables.
 */
const getFilmsListingQuery = graphql(`
  query FilmsListing($page: Int = 10) {
    ...FilmsListingFragment
  }
`);

async function FilmsListingPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const data = await query(getFilmsListingQuery, {
    page: page - 1,
  });

  return <FilmsListing data={data} page={page} />;
}
