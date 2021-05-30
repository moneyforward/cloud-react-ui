import styled from "styled-components";
import { Story, Meta } from "@storybook/react";
import { Footer, Props } from "./Footer";
import { Link, Text } from "../../components";

export default {
  component: Footer,
  title: "ui/Footer",
} as Meta;

const StyledText = styled(Text)`
  margin-right: 32px;
  letter-spacing: 0.4px;
`;

const Template: Story<Props> = (args) => (
  <Footer {...args}>
    <StyledText size="small">
      <Link href="#">利用規約</Link>
    </StyledText>

    <StyledText size="small">
      <Link href="#">個人情報保護方針</Link>
    </StyledText>

    <StyledText size="small">&copy; Money Forward, Inc.</StyledText>
  </Footer>
);

export const Default = Template.bind({});

export const Fixed = Template.bind({});
Fixed.args = { fixed: true };
