import { ButtonPresenter } from "./ButtonPresenter";
import { IconTypes } from "../Icon/IconContainer";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  color?: "default" | "danger" | "primary" | "settings";
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: IconTypes;
  iconPlacement?: "start" | "end";
  children?: React.ReactNode;
  className?: string;
};

export function ButtonContainer(props: ButtonProps): React.ReactElement {
  return <ButtonPresenter {...props} />;
}
