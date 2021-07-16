import styled from "styled-components";
import { Story, Meta } from "@storybook/react";
import { Notification, NotificationProps } from "./Notification";

export default {
  component: Notification,
  title: "components/Notification",
} as Meta;

const Wrapper = styled.div`
  > * + * {
    margin-top: 24px;
  }
`;

const Template: Story<NotificationProps> = ({ isOpen, align, ...rest }) => (
  <>
    <Wrapper>
      <Notification {...rest} isOpen={true}>
        Notification
      </Notification>
      <Notification {...rest} align="center" isOpen={true}>
        Notification align=center
      </Notification>
    </Wrapper>
  </>
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { color: "error" };

export const Warning = Template.bind({});
Warning.args = { color: "warning" };
