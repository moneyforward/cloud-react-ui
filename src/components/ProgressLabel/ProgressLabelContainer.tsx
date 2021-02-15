import { ProgressLabelPresenter } from "./ProgressLabelPresenter";

export type ProgressLabelProps = {
  status?: "waiting" | "inProgress" | "completed";
  children: React.ReactNode;
  className?: string;
};

export function ProgressLabelContainer(
  props: ProgressLabelProps
): React.ReactElement {
  return <ProgressLabelPresenter {...props} />;
}
