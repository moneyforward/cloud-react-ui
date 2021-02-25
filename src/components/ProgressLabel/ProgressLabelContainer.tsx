import { ProgressLabelPresenter } from "./ProgressLabelPresenter";

export type ProgressLabelProps = {
  status?: "waiting" | "inProgress" | "completed";
  className?: string;
};

export const ProgressLabelContainer: React.FC<ProgressLabelProps> = (props) => {
  return <ProgressLabelPresenter {...props} />;
};
