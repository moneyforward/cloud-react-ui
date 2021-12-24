import { TooltipProps as MuiTootipProps } from '@material-ui/core/Tooltip';
import { TooltipPresenter } from './TooltipPresenter';

export type TooltipProps = {
  message: React.ReactNode;
  placement?: MuiTootipProps['placement'];
  arrow?: boolean;
} & JSX.IntrinsicElements['div'];

export const TooltipContainer: React.FC<TooltipProps> = (props) => {
  return <TooltipPresenter {...props} />;
};
