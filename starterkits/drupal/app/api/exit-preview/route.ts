import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

async function GET() {
  (await draftMode()).disable();
  redirect('/');
}

export { GET };
