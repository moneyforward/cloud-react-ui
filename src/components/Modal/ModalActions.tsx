import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type ModalActionsProps = {
  children?: React.ReactNode;
  className?: string;
};

const StyledModalActions = styled.div`
  ${({ theme: { modal } }) => css`
    display: ${modal.actions.display};
    align-items: ${modal.actions.alignItems};
    justify-content: ${modal.actions.justifyContent};
    flex: ${modal.actions.flex};
    padding: ${modal.actions.padding};
    border-top-style: ${modal.actions.borderTopStyle};
    border-top-width: ${modal.actions.borderTopWidth};
    border-top-color: ${modal.actions.borderTopColor};
    & > * {
      margin: ${modal.actions.children.margin};
    }
  `}
`;
StyledModalActions.defaultProps = defaultProps;

const ModalActions = forwardRef<HTMLDivElement, ModalActionsProps>(
  (props, ref) => <StyledModalActions ref={ref} {...props} />
);

ModalActions.displayName = "Modal.Actions";

export { ModalActions };
