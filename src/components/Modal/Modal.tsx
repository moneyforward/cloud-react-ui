import { forwardRef } from "react";
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProp,
} from "@material-ui/core";
import { ModalHeader } from "./ModalHeader";
import { ModalContent } from "./ModalContent";
import { ModalActions } from "./ModalActions";

export type ModalProps = MuiDialogProp;

const ModalRoot = forwardRef<HTMLDivElement, ModalProps>((props, ref) => (
  <MuiDialog ref={ref} {...props} />
));

ModalRoot.displayName = "Modal";

export type { ModalHeaderProps } from "./ModalHeader";
export type { ModalContentProps } from "./ModalContent";
export type { ModalActionsProps } from "./ModalActions";
export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Content: ModalContent,
  Actions: ModalActions,
});
