import { forwardRef } from "react";
import { TextFieldPresenter } from "./TextFieldPresenter";

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export const TextFieldContainer = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextFieldContainer(props, ref) {
    return <TextFieldPresenter ref={ref} {...props} />;
  }
);
