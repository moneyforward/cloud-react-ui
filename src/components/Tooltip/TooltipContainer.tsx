import { TooltipProps as MuiTootipProps } from "@material-ui/core/Tooltip";
import { TooltipPresenter } from "./TooltipPresenter";

export type TooltipProps = {
  message: string;
  placement?: MuiTootipProps["placement"];
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function TooltipContainer(props: TooltipProps): React.ReactElement {
  return <TooltipPresenter {...props} />;
}
