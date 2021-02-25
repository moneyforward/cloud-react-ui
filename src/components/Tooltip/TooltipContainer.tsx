import { TooltipProps as MuiTootipProps } from "@material-ui/core/Tooltip";
import { TooltipPresenter } from "./TooltipPresenter";

export type TooltipProps = {
  message: string;
  placement?: MuiTootipProps["placement"];
  arrow?: boolean;
  className?: string;
};

export const TooltipContainer: React.FC<TooltipProps> = (props) => {
  return <TooltipPresenter {...props} />;
};
