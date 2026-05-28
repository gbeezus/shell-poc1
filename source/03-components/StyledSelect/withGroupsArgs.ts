import { Props } from 'react-select';
import DropdownOption from './DropdownOption';

const withGroupsArgs = {
  options: [
    {
      label: 'Group One',
      options: [
        { value: 'one', label: 'Option One' },
        { value: 'two', label: 'Option Two' },
        { value: 'three', label: 'Option Three' },
      ],
    },
    {
      label: 'Group Two',
      options: [
        { value: 'four', label: 'Option Four' },
        { value: 'five', label: 'Option Five' },
        { value: 'six', label: 'Disabled Option', isDisabled: true },
      ],
    },
  ],
  isMulti: false,
  isSearchable: false,
} satisfies Props<DropdownOption>;

export default withGroupsArgs;
