import { ButtonPresenter } from "./ButtonPresenter";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  color?: "default" | "danger" | "primary" | "settings";
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children?: React.ReactNode;
  className?: string;
};

export function ButtonContainer(props: ButtonProps): React.ReactElement {
  return <ButtonPresenter {...props} />;
}
