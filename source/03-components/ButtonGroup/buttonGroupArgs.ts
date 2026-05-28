import { ButtonGroupProps } from '~components/ButtonGroup/ButtonGroup';

const buttonGroupArgs = {
  heading: 'Heading',
  element: 'div',
  modifierClasses: '',
  buttons: [
    { text: 'First button' },
    { text: 'Active middle button', isActive: true },
    { text: 'Middle button' },
    { text: 'Last button' },
  ],
  activeLabel: '(active)',
} satisfies ButtonGroupProps;

export default buttonGroupArgs;
