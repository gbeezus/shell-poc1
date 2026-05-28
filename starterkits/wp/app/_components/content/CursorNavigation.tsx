import { LinkButton } from '~components/Button';

enum ArchiveParams {
  AFTER = 'after',
  BEFORE = 'before',
}

interface CursorNavigationProps {
  pageInfo?: {
    hasNextPage: boolean;
    startCursor?: string | null | undefined;
    endCursor?: string | null | undefined;
    hasPreviousPage: boolean;
  };
}

function CursorNavigation({ pageInfo }: CursorNavigationProps) {
  return (
    <div>
      {pageInfo?.hasPreviousPage && pageInfo.startCursor ? (
        <LinkButton
          label="Previous"
          href={`/blog?before=` + pageInfo.startCursor}
        />
      ) : null}
      {pageInfo?.hasNextPage && pageInfo.endCursor ? (
        <LinkButton label="Next" href={`/blog?after=` + pageInfo.endCursor} />
      ) : null}
    </div>
  );
}

export { ArchiveParams };
export default CursorNavigation;
