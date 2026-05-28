'use client';

import { useActionState } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';
import { useFormStatus } from 'react-dom';
import { loginAction } from './action';

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button disabled={status.pending}>
      {status.pending ? 'Loading...' : 'Login'}
    </button>
  );
}

interface FormState {
  error?: string | undefined;
  message?: undefined;
}
function LoginForm() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [state, formAction] = useActionState<FormState, FormData>(
    loginAction,
    {},
  );

  return (
    <form action={formAction}>
      <fieldset>
        <label htmlFor="usernameEmail">Username or Email</label>
        <input type="name" name="usernameEmail" />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </fieldset>

      <input
        type="hidden"
        id="path"
        name="path"
        value={`${pathname}?${searchParams.toString()}`}
      />

      <SubmitButton />

      {state.error && <p dangerouslySetInnerHTML={{ __html: state.error }}></p>}
    </form>
  );
}

export default LoginForm;
