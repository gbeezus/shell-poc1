// Adapted from the Next.js example code
// https://github.com/vercel/next-learn/blob/main/dashboard/starter-example/app/lib/utils.ts
function generatePagination(
  currentPage: number,
  totalPages: number,
  { displayAllPages = 7, pagesToShow = 3 } = {},
): {
  first?: number;
  previous?: number;
  pages: (number | string)[];
  next?: number;
  last?: number;
} {
  const standardItems = {
    previous: currentPage > 1 ? currentPage - 1 : undefined,
    next: currentPage < totalPages ? currentPage + 1 : undefined,
  };

  // If the total number of pages is below the cut-off,
  // display all pages without any ellipsis.
  if (totalPages <= displayAllPages) {
    return {
      ...standardItems,
      pages: Array.from({ length: totalPages }, (_, i) => i + 1),
    };
  }

  if (currentPage <= pagesToShow) {
    return {
      ...standardItems,
      pages: [...Array.from({ length: pagesToShow }, (_, i) => i + 1), '...'],
      last: totalPages,
    };
  }

  if (currentPage >= totalPages - (pagesToShow - 1)) {
    return {
      ...standardItems,
      first: 1,
      pages: [
        '...',
        ...Array.from(Array(pagesToShow).fill('').keys())
          .reverse()
          .map((_, i) => totalPages - i),
      ],
    };
  }

  const pagesPerSide = Math.floor((pagesToShow - 1) / 2);
  return {
    ...standardItems,
    first: 1,
    pages: [
      '...',
      ...[...Array.from({ length: pagesPerSide }, (_, i) => i + 1)]
        .map(i => currentPage - i)
        .reverse(),
      currentPage,
      ...[...Array.from({ length: pagesPerSide }, (_, i) => i + 1)].map(
        i => currentPage + i,
      ),
      '...',
    ],
    last: totalPages,
  };
}

export default generatePagination;
