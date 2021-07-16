import { Story, Meta } from "@storybook/react";
import { Notification, Props } from "./Notification";

export default {
  component: Notification,
  title: "components/Notification",
} as Meta;

const Template: Story<Props> = (args) => (
  <Notification {...args}>Notification</Notification>
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { color: "error" };

export const Warning = Template.bind({});
Warning.args = { color: "warning" };
