import { Story, Meta } from "@storybook/react";
import { Switch, SwitchProps } from "./Switch";

export default {
  component: Switch,
  title: "components/Switch",
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
