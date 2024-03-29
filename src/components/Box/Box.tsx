import MuiBox, { BoxProps as MuiBoxProps } from '@material-ui/core/Box';
import { SpacingProps, SizingProps, DisplayProps } from '@material-ui/system';

export type BoxProps = SpacingProps &
  SizingProps &
  DisplayProps & { as?: MuiBoxProps['component'] };

// see: https://material-ui.com/system/spacing/
export const Box: React.FC<BoxProps> = ({ as = 'div', ...rest }) => {
  return <MuiBox component={as} {...rest} />;
};
