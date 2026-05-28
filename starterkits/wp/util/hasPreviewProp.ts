import { NextSearchParamsProp } from '~/types/NextSearchParams';

export async function hasPreviewProps(props: NextSearchParamsProp) {
  const searchParams = await props.searchParams;
  return searchParams?.preview === 'true' && !!searchParams?.p;
}
