import { CheckboxPresenter } from "./CheckboxPresenter";

export type CheckboxProps = {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  children?: React.ReactNode;
  className?: string;
};

export function CheckboxContainer(props: CheckboxProps): React.ReactElement {
  return <CheckboxPresenter {...props} />;
}
