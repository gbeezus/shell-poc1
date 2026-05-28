import NextSearchParams from '~/types/NextSearchParams';

type StringParams = Record<string, string | undefined>;

function stringParamsFromSearch(searchParams: NextSearchParams): StringParams {
  return Object.fromEntries(
    Object.entries(searchParams).map(([k, v]) => [
      k,
      typeof v === 'string' ? v : undefined,
    ]),
  );
}

export type { StringParams };
export default stringParamsFromSearch;
