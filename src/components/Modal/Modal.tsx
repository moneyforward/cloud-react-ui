import { forwardRef } from "react";
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProp,
} from "@material-ui/core";

export type Props = MuiDialogProp;

const Modal = forwardRef<HTMLDivElement, Props>(
  ({...rest }, ref) => <MuiDialog ref={ref} {...rest} />
);

Modal.displayName = "Modal";

export { Modal };
