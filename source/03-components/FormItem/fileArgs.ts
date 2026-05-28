import { InputProps } from '~components/FormItem/FormItem';

const fileArgs = {
  id: 'file',
  label: 'File',
  type: 'file',
  size: 22,
  accept: 'image/*',
} satisfies InputProps;

export default fileArgs;
