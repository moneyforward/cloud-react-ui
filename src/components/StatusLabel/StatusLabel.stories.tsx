import { Story, Meta } from "@storybook/react";
import { StatusLabel, Props } from "./StatusLabel";

export default {
  component: StatusLabel,
  title: "components/StatusLabel",
} as Meta;

const Template: Story<Props> = (args) => (
  <StatusLabel {...args}>Status</StatusLabel>
);

export const Red = Template.bind({});
Red.args = { color: "red" };

export const Gray = Template.bind({});
Gray.args = { color: "gray" };

export const Green = Template.bind({});
Green.args = { color: "green" };

export const Orange = Template.bind({});
Orange.args = { color: "orange" };

export const Blue = Template.bind({});
Blue.args = { color: "blue" };

export const Outline = Template.bind({});
Outline.args = { color: "gray", outline: true };
