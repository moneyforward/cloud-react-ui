import { Story, Meta } from '@storybook/react';
import { IconContainer as Icon, IconProps as Props } from './IconContainer';

export default {
  component: Icon,
  title: 'components/Icon',
} as Meta;

const Template: Story<Props> = (args) => <Icon {...args} />;

export const Bell = Template.bind({});
Bell.args = { icon: 'bell' };

export const Bullhorn = Template.bind({});
Bullhorn.args = { icon: 'bullhorn' };

export const CaretUp = Template.bind({});
CaretUp.args = { icon: 'caretUp' };

export const ChevronUp = Template.bind({});
ChevronUp.args = { icon: 'chevronUp' };

export const Envelope = Template.bind({});
Envelope.args = { icon: 'envelope' };

export const Plus = Template.bind({});
Plus.args = { icon: 'plus' };

export const Question = Template.bind({});
Question.args = { icon: 'question' };
