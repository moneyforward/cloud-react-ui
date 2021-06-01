import { Story, Meta } from "@storybook/react";
import {
  HeadingContainer as Heading,
  HeadingProps as Props,
} from "./HeadingContainer";

export default {
  component: Heading,
  title: "components/Heading",
} as Meta;

const Template: Story<Props> = (args) => <Heading {...args}>Heading</Heading>;

export const Default = Template.bind({});
