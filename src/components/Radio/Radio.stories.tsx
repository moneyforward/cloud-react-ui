import { Story, Meta } from '@storybook/react';
import { Radio, Props } from './Radio';

export default {
  component: Radio,
  title: 'components/Radio',
} as Meta;

const Template: Story<Props> = (args) => <Radio {...args}>Radio</Radio>;

export const Default = Template.bind({
  id: 'radio-1',
  name: 'default',
  value: 'value-1',
});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, id: 'radio-2', name: 'disabled' };
