type NextSearchParams = { [key: string]: string | string[] | undefined };

interface NextSearchParamsProp {
  searchParams: Promise<NextSearchParams>;
}

export type { NextSearchParamsProp };
export default NextSearchParams;
