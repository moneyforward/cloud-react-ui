import { BoxPresenter } from "./BoxPresenter";

export type BoxProps = {
  className?: string;
  children: React.ReactNode;
};

export function BoxContainer(props: BoxProps): React.ReactElement {
  return <BoxPresenter {...props} />;
}
