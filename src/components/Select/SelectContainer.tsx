import { SelectPresenter } from "./SelectPresenter";

export type GroupOption = {
  label: string;
  options: Option[];
};

export type Option = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

export type SelectProps = {
  options: Option[] | GroupOption[];
  value?: Option | GroupOption;
  name?: string;
  placeholder?: string;
  onChange?: (option: Option) => void;
  clearable?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  error?: boolean;
  className?: string;
};

export function SelectContainer(props: SelectProps): React.ReactElement {
  return <SelectPresenter {...props} />;
}
