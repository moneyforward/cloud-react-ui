import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

const StyledModalContent = styled.div`
  ${({ theme: { modal } }) => css`
    flex: 1 1 auto;
    padding: 16px;
    overflow-y: auto;
  `}
`;
StyledModalContent.defaultProps = defaultProps;

const ModalContent = forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => (
    <StyledModalContent ref={ref} {...rest}>
      {children}
    </StyledModalContent>
  )
);

ModalContent.displayName = "ModalContent";

export { ModalContent };
