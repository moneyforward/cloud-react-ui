import { Story, Meta } from '@storybook/react';
import { TextContainer as Text, TextProps as Props } from './TextContainer';

export default {
  component: Text,
  title: 'components/Text',
} as Meta;

const Template: Story<Props> = (args) => <Text {...args}>Text</Text>;

export const Default = Template.bind({});
