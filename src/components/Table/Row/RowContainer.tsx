import { RowPresenter } from "./RowPresenter";

export type RowProps = {
  className?: string;
  children: React.ReactNode;
};

export function RowContainer(props: RowProps): React.ReactElement {
  return <RowPresenter {...props} />;
}
