import { FieldsetProps } from '~components/Fieldset/Fieldset';

const fieldsetArgs = {
  legend: 'Fieldset',
  description: <p>The description for this fieldset.</p>,
  id: 'fieldset',
  errors: '',
  prefix: '',
  suffix: '',
  isRequired: false,
  isDisabled: false,
  children: <p>Fieldset content goes here&hellip;</p>,
} satisfies FieldsetProps;

export default fieldsetArgs;
