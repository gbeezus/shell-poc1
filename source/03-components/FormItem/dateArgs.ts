import { InputProps } from '~components/FormItem/FormItem';

const dateArgs = {
  id: 'date',
  label: 'Date',
  type: 'date',
  size: 12,
  min: '1900-01-01',
  max: '2050-12-31',
} satisfies InputProps;

export default dateArgs;
