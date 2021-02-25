import { BoxPresenter } from "./BoxPresenter";

export type BoxProps = {
  className?: string;
};

export const BoxContainer: React.FC<BoxProps> = (props) => {
  return <BoxPresenter {...props} />;
};
