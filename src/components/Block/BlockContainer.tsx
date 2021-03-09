import { BlockPresenter } from "./BlockPresenter";

export type BlockProps = {
  border?: boolean;
  className?: string;
};

export const BlockContainer: React.FC<BlockProps> = (props) => {
  return <BlockPresenter {...props} />;
};
