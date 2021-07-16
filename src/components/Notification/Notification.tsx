import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  color?: "success" | "warning" | "error";
  className?: string;
  children: React.ReactNode;
};

const StyledNotification = styled.div<Props>`
  ${({ color = "success", theme: { flashMessage } }) => css`
    width: ${flashMessage.width};
    padding: ${flashMessage.padding};
    background-color: ${flashMessage.backgroundColor[color]};
    border-width: ${flashMessage.borderWidth};
    border-style: ${flashMessage.borderStyle};
    border-color: ${flashMessage.borderColor[color]};
    border-radius: ${flashMessage.borderRadius};
    color: ${flashMessage.color[color]};
    font-size: ${flashMessage.fontSize};
  `}
`;
StyledNotification.defaultProps = defaultProps;

const Notification = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledNotification ref={ref} {...props} />
));

Notification.displayName = "Notification";

export { Notification };
