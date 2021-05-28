import { forwardRef } from "react";
import styled, { css } from "styled-components";
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProp,
} from "@material-ui/core";
import { defaultProps } from "../../theme";

export type Props = MuiDialogProp;

const StyledModal = styled(MuiDialog)`
  ${({ theme: { modal } }) => css`
    color: ${modal.color};
  `}
`;
StyledModal.defaultProps = defaultProps;

const Modal = forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => (
    <StyledModal ref={ref} {...rest}>
      {children}
    </StyledModal>
  )
);

Modal.displayName = "Modal";

export { Modal };
