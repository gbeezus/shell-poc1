import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import drupal from '~/util/drupal/drupal';

async function GET(request: NextRequest) {
  if (!request) {
    return;
  }

  const query = request.nextUrl.searchParams;
  let slug = query.get('slug');
  if (!slug) {
    return;
  }
  slug = slug.replace('/drupal', '');

  try {
    const validateUrl = drupal.buildUrl('/next/preview-url');
    const result = await drupal.fetch(validateUrl.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      withAuth: true,
      body: JSON.stringify({
        ...Object.fromEntries(query),
      }),
    });

    if (!result.ok) {
      return result;
    }
    (await draftMode()).enable();
  } catch (_error: unknown) {
    return new NextResponse(null, {
      status: 422,
    });
  } finally {
    redirect(slug);
  }
}

export { GET };
