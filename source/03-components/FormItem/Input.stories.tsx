import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '~/.storybook/decorators';
import { Input } from './FormItem';
import colorArgs from './colorArgs';
import dateArgs from './dateArgs';
import decimalArgs from './decimalArgs';
import emailArgs from './emailArgs';
import fileArgs from './fileArgs';
import floatArgs from './floatArgs';
import integerArgs from './integerArgs';
import monthArgs from './monthArgs';
import passwordArgs from './passwordArgs';
import rangeArgs from './rangeArgs';
import searchArgs from './searchArgs';
import telephoneArgs from './telephoneArgs';
import textArgs from './textArgs';
import timeArgs from './timeArgs';
import urlArgs from './urlArgs';
import weekArgs from './weekArgs';

const meta: Meta<typeof Input> = {
  title: 'Components/Form Item/Input',
  component: Input,
  decorators: [withGlobalWrapper],
  args: {
    isDisabled: false,
    descriptionDisplay: 'after',
    description: 'The description for this form field',
    labelDisplay: 'before',
    errors: '',
    isFullWidth: false,
    isRequired: false,
    prefix: '',
    suffix: '',
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof Input>;
const Color: Story = {
  args: colorArgs,
};
const Date: Story = {
  args: dateArgs,
};
const Email: Story = {
  args: emailArgs,
};
const File: Story = {
  args: fileArgs,
};
const Month: Story = {
  args: monthArgs,
};
const NumberDecimal: Story = {
  args: decimalArgs,
};
const NumberFloat: Story = {
  args: floatArgs,
};
const NumberInteger: Story = {
  args: integerArgs,
};
const Password: Story = {
  args: passwordArgs,
};
const Range: Story = {
  args: rangeArgs,
};
const Search: Story = {
  args: searchArgs,
};
const Telephone: Story = {
  args: telephoneArgs,
};
const Text: Story = {
  args: textArgs,
};
const Time: Story = {
  args: timeArgs,
};
const Url: Story = {
  args: urlArgs,
};
const Week: Story = {
  args: weekArgs,
};

export default meta;
export {
  Color,
  Date,
  Email,
  File,
  Month,
  NumberDecimal,
  NumberFloat,
  NumberInteger,
  Password,
  Range,
  Search,
  Telephone,
  Text,
  Time,
  Url,
  Week,
};
