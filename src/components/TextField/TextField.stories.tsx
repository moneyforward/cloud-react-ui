import { Story, Meta } from "@storybook/react";
import { TextField, Props } from "./TextField";

export default {
  component: TextField,
  title: "components/TextField",
} as Meta;

const Template: Story<Props> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
