import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

// Example taken from Next.js docs:
// https://nextjs.org/docs/app/api-reference/functions/revalidatePath#route-handler
function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('secret');
  if (
    process.env.REVALIDATION_TOKEN &&
    token !== process.env.REVALIDATION_TOKEN
  ) {
    // Secret token does not match. Throw error.
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const path = request.nextUrl.searchParams.get('path');
  const tag = request.nextUrl.searchParams.get('tag');

  if (!path && !tag) {
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: 'Missing path or tag to revalidate',
      },
      { status: 400 },
    );
  }

  if (path) {
    revalidatePath(path);
  }

  if (tag) {
    revalidateTag(tag);
  }

  return Response.json({ revalidated: true, now: Date.now() });
}

export { GET };
