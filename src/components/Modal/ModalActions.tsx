import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

const StyledModalActions = styled.div`
  ${({ theme: { modal } }) => css`
    display: flex;
    align-items: center;
    padding: 16px;
    justify-content: center;
    flex: 0 0 auto;
    border-top: 1px solid #D4D8DD;
    & > * {
      margin: 0 8px;
    }
  `}
`;
StyledModalActions.defaultProps = defaultProps;

const ModalActions = forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => (
    <StyledModalActions ref={ref} {...rest}>
      {children}
    </StyledModalActions>
  )
);

ModalActions.displayName = "ModalActions";

export { ModalActions };
