import { RowPresenter } from "./RowPresenter";

export type RowProps = {
  className?: string;
};

export const RowContainer: React.FC<RowProps> = (props) => {
  return <RowPresenter {...props} />;
};
