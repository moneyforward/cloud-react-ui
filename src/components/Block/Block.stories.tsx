import { Story, Meta } from '@storybook/react';
import { Block, Props } from './Block';

export default {
  component: Block,
  title: 'components/Block',
} as Meta;

const Template: Story<Props> = (args) => <Block {...args}>Block</Block>;

export const Default = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = { border: true };
