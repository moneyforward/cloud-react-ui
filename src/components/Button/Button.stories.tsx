import { Story, Meta } from '@storybook/react';
import { Button, Props } from './Button';

export default {
  component: Button,
  title: 'components/Button',
} as Meta;

const Template: Story<Props> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});

export const SizeSmall = Template.bind({ size: 'large' });
SizeSmall.args = { size: 'small' };

export const SizeMedium = Template.bind({});
SizeMedium.args = { size: 'medium' };

export const SizeLarge = Template.bind({});
SizeLarge.args = { size: 'large' };

export const ColorDanger = Template.bind({});
ColorDanger.args = { color: 'danger' };

export const ColorPrimary = Template.bind({});
ColorPrimary.args = { color: 'primary' };

export const ColorSettings = Template.bind({});
ColorSettings.args = { color: 'settings' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Link = Template.bind({});
Link.args = { as: 'a', href: '#' };
