import { getClient } from '@faustwp/experimental-app-router';
import parse from 'html-react-parser';
import { Metadata } from 'next';
import Link from 'next/link';
import { NextSearchParamsProp } from '~/types/NextSearchParams';
import {
  SearchQuery,
  SearchQueryVariables,
} from '~/types/__generated__/graphql';
import stringParamsFromSearch from '~/util/wp/stringParamsFromSearch';
import Article from '~components/Article/Article';
import { LinkButton } from '~components/Button';
import Main from '~layouts/Main/Main';
import SearchForm from './SearchForm';
import SearchParams from './SearchParams';
import searchQuery from './searchQuery';

const PAGE_TITLE = 'Search';
export const metadata: Metadata = {
  title: PAGE_TITLE,
};

type SearchPageProps = NextSearchParamsProp;

async function SearchPage(props: SearchPageProps) {
  const searchParams = await props.searchParams;
  const stringParams = stringParamsFromSearch(searchParams);
  const searchString = stringParams[SearchParams.SEARCH];

  // Use cursor based pagination. Prioritize "after" over "before".
  const after = stringParams[SearchParams.AFTER];
  const before = (!after && stringParams[SearchParams.BEFORE]) || undefined;
  // "first" should be 10 for all queries that do not use "before".
  const first = (!before && 10) || undefined;
  const last = (before && 10) || undefined;

  const client = await getClient();
  const { data, error } = await client.query<SearchQuery, SearchQueryVariables>(
    {
      query: searchQuery,
      variables: {
        first,
        after,
        last,
        before,
        search: searchString,
      },
    },
  );

  if (error) {
    throw new Error(error.message);
  }
  if (!data.contentNodes) {
    throw new Error('An error has occured when searching.');
  }

  const { edges, pageInfo } = data.contentNodes;

  function formCursorHref(key: SearchParams, value: string): string {
    const newParams = new URLSearchParams({
      [SearchParams.SEARCH]: searchString || '',
      [key]: value,
    }).toString();
    return `/search?${newParams}`;
  }

  return (
    <Main>
      <Article title={PAGE_TITLE}>
        <SearchForm />
        {edges.length === 0 && <div>No results</div>}
        {edges.length > 0 && (
          <div>
            <ul>
              {edges.map(a => {
                if (!a) {
                  return null;
                }
                const { title } = a.node;
                const slug = 'slug' in a.node ? a.node.slug : undefined;
                if (!title || !slug) {
                  return null;
                }
                const excerpt =
                  'excerpt' in a.node ? a.node.excerpt : undefined;
                const isFilm = a.node.__typename === 'Film';
                return (
                  <li key={a.node.id}>
                    <div>
                      <Link href={'/' + (isFilm ? 'film/' : '') + slug}>
                        {title}
                      </Link>
                    </div>
                    {excerpt && <div>{parse(excerpt)}</div>}
                  </li>
                );
              })}
            </ul>
            {pageInfo.hasPreviousPage && pageInfo.startCursor ? (
              <LinkButton
                label="Previous"
                href={formCursorHref(SearchParams.BEFORE, pageInfo.startCursor)}
              />
            ) : null}
            {pageInfo.hasNextPage && pageInfo.endCursor ? (
              <LinkButton
                label="Next"
                href={formCursorHref(SearchParams.AFTER, pageInfo.endCursor)}
              />
            ) : null}
          </div>
        )}
      </Article>
    </Main>
  );
}

export default SearchPage;
