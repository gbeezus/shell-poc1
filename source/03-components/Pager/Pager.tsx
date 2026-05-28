'use client';

import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import AngleDoubleLeft from '~global/icon/icons/AngleDoubleLeft';
import AngleDoubleRight from '~global/icon/icons/AngleDoubleRight';
import AngleLeft from '~global/icon/icons/AngleLeft';
import AngleRight from '~global/icon/icons/AngleRight';
import generatePagination from '~utility/generatePagination';
import styles from './pager.module.css';

interface PagerProps extends GessoComponent {
  totalPages: number;
  heading?: string;
}

function Pager({
  totalPages,
  modifierClasses,
  heading = 'Pagination',
}: PagerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get('page')) || 1;
  const pagerItems = generatePagination(currentPage, totalPages, {
    displayAllPages: 9,
    pagesToShow: 5,
  });

  // Pretty much straight out of the Next.js tutorial
  // https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams || undefined);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav className={clsx(modifierClasses)} aria-label={heading}>
      <ul className={styles.items}>
        {pagerItems.first && (
          <li className={clsx(styles.item)} data-always-show={true}>
            <Link
              className={clsx(styles.link, styles['link--first'])}
              href={createPageURL(pagerItems.first)}
            >
              <AngleDoubleLeft isHidden={true} />
              First
            </Link>
          </li>
        )}
        {pagerItems.previous && (
          <li className={clsx(styles.item)} data-always-show={true}>
            <Link
              className={clsx(styles.link, styles['link--previous'])}
              href={createPageURL(pagerItems.previous)}
            >
              <AngleLeft isHidden={true} />
              Previous
            </Link>
          </li>
        )}
        {pagerItems.pages.map((page, index) => {
          let position: 'middle' | undefined;
          if (page === '...') position = 'middle';

          if (position === 'middle') {
            return (
              <li
                className={clsx(styles.item, styles.ellipsis)}
                key={`${page}-${index}`}
                aria-label="ellipsis indicating non-visible pages"
              >
                {page}
              </li>
            );
          }

          return (
            <li
              className={clsx(styles.item, {
                [styles['item--current']]: currentPage === page,
              })}
              key={page}
              data-always-show={currentPage === page ? true : undefined}
            >
              {currentPage === page ? (
                <>
                  <span className="u-visually-hidden">Currently on page</span>{' '}
                  {page}
                </>
              ) : (
                <Link
                  className={styles.link}
                  href={createPageURL(page)}
                  aria-label={`Page ${page}`}
                >
                  {page}
                </Link>
              )}
            </li>
          );
        })}
        {pagerItems.next && (
          <li className={clsx(styles.item)} data-always-show={true}>
            <Link
              className={clsx(styles.link, styles['link--next'])}
              href={createPageURL(pagerItems.next)}
            >
              Next
              <AngleRight isHidden={true} />
            </Link>
          </li>
        )}
        {pagerItems.last && (
          <li className={clsx(styles.item)} data-always-show={true}>
            <Link
              className={clsx(styles.link, styles['link--last'])}
              href={createPageURL(pagerItems.last)}
            >
              Last
              <AngleDoubleRight isHidden={true} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pager;
export type { PagerProps };
