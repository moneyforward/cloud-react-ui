import { Story, Meta } from '@storybook/react';
import { Checkbox, Props } from './Checkbox';

export default {
  component: Checkbox,
  title: 'components/Checkbox',
} as Meta;

const Template: Story<Props> = (args) => (
  <Checkbox {...args}>Checkbox</Checkbox>
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
