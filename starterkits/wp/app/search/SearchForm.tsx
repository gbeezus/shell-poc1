'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEventHandler, useEffect, useState } from 'react';
import SearchParams from '~/app/search/SearchParams';
import usePrevious from '~/util/usePrevious';
import { Button } from '~components/Button';

function SearchForm() {
  const pathname = usePathname();
  const params = useSearchParams();
  const searchParam = params.get(SearchParams.SEARCH);
  const router = useRouter();
  const prevSearchParam = usePrevious(searchParam);
  const [searchString, setSearchString] = useState(searchParam || '');

  useEffect(() => {
    if (prevSearchParam !== searchParam) {
      // Search param has changed.
      // Update the search string to the current search param to keep
      // the value up to date.
      setSearchString(searchParam || '');
    }
  }, [prevSearchParam, searchParam]);

  const handeSubmit: FormEventHandler = e => {
    e.preventDefault();
    const newParams = new URLSearchParams();
    newParams.set(SearchParams.SEARCH, searchString);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handeSubmit}>
        <input
          onChange={e => setSearchString(e.target.value)}
          type="text"
          value={searchString}
        />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
}

export default SearchForm;
