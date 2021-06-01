import { Story, Meta } from "@storybook/react";
import { Box, BoxProps as Props } from "./Box";

export default {
  component: Box,
  title: "components/Box",
} as Meta;

const Template: Story<Props> = (args) => <Box {...args}>Text</Box>;

export const Default = Template.bind({});

export const CustomTag = Template.bind({});
CustomTag.args = { as: "span" };

export const Margined = Template.bind({});
Margined.args = { margin: "100px" };

export const Paddinged = Template.bind({});
Paddinged.args = { padding: "100px" };
