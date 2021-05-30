import { Story, Meta } from "@storybook/react";
import { Radio, Props } from "./Radio";

export default {
  component: Radio,
  title: "components/Radio",
} as Meta;

const Template: Story<Props> = (args) => <Radio {...args}>Radio</Radio>;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
