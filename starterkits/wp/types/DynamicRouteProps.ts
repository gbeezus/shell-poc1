import { NextSearchParamsProp } from './NextSearchParams';

interface DynamicRouteProps extends NextSearchParamsProp {
  params: { slug: string };
}

export default DynamicRouteProps;
