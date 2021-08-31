import { Story, Meta } from '@storybook/react';
import { FlashMessage, Props } from './FlashMessage';

export default {
  component: FlashMessage,
  title: 'components/FlashMessage',
} as Meta;

const Template: Story<Props> = (args) => (
  <FlashMessage {...args}>Flash Message</FlashMessage>
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { color: 'error' };

export const Warning = Template.bind({});
Warning.args = { color: 'warning' };
