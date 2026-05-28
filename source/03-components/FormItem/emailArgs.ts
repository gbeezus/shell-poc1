import { InputProps } from '~components/FormItem/FormItem';

const emailArgs = {
  id: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'email@example.com',
  size: 60,
  maxLength: 255,
} satisfies InputProps;

export default emailArgs;
