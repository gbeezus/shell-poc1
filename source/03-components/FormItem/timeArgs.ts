import { InputProps } from '~components/FormItem/FormItem';

const timeArgs = {
  id: 'time',
  label: 'Time',
  type: 'time',
  placeholder: 'hh:mm:ss',
  size: 12,
  step: 1,
} satisfies InputProps;

export default timeArgs;
