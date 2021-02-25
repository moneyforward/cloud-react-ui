import { RadioPresenter } from "./RadioPresenter";

export type RadioProps = {
  name?: string;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  className?: string;
};

export const RadioContainer: React.FC<RadioProps> = (props) => {
  return <RadioPresenter {...props} />;
};
