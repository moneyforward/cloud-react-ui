import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

const StyledModalContent = styled.div`
  ${({ theme: { modal } }) => css`
    flex: ${modal.content.flex};
    padding: ${modal.content.padding};
    overflow-y: ${modal.content.overflowY};
  `}
`;
StyledModalContent.defaultProps = defaultProps;

const ModalContent = forwardRef<HTMLDivElement, Props>(
  ({ ...rest }, ref) => <StyledModalContent ref={ref} {...rest} />
);

ModalContent.displayName = "ModalContent";

export { ModalContent };
