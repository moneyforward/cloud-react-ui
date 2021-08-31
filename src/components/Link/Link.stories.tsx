import { Story, Meta } from '@storybook/react';
import { LinkContainer as Link, LinkProps as Props } from './LinkContainer';

export default {
  component: Link,
  title: 'components/Link',
} as Meta;

const Template: Story<Props> = (args) => <Link {...args}>Link</Link>;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
