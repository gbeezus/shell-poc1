'use server';

import { onLogin } from '@faustwp/experimental-app-router';
import { redirect } from 'next/navigation';

export async function loginAction<T>(
  _prevData: Awaited<T>,
  formData: FormData,
) {
  const res = await onLogin(formData);

  if (res.error) {
    return res;
  }

  // We need some sort of "never" function, or else faustwp will yell at us.
  // Because of this, use a redirect() to essentially stay on the same page.
  // Get path to redirect to from form data.
  const path = formData.get('path');
  redirect((typeof path === 'string' && path) || '/');
}
