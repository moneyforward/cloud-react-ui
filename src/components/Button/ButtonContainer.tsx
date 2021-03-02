import { ButtonPresenter } from "./ButtonPresenter";
import { IconTypes } from "../Icon";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  color?: "default" | "danger" | "primary" | "settings";
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: IconTypes;
  iconPlacement?: "start" | "end";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

export const ButtonContainer: React.FC<ButtonProps> = (props) => {
  return <ButtonPresenter {...props} />;
};
