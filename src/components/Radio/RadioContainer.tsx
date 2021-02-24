import { RadioPresenter } from "./RadioPresenter";

export type RadioProps = {
  name?: string;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  children?: React.ReactNode;
  className?: string;
};

export function RadioContainer(props: RadioProps): React.ReactElement {
  return <RadioPresenter {...props} />;
}
