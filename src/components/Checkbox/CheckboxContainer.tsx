import { CheckboxPresenter } from "./CheckboxPresenter";

export type CheckboxProps = {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  className?: string;
};

export const CheckboxContainer: React.FC<CheckboxProps> = (props) => {
  return <CheckboxPresenter {...props} />;
};
