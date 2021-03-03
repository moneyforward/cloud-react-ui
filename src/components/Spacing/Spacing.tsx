import Box, { BoxProps } from "@material-ui/core/Box";
import { SpacingProps as MuiSpacingProps } from "@material-ui/system";

export type SpacingProps = MuiSpacingProps & { as?: BoxProps["component"] };

// see: https://material-ui.com/system/spacing/
export const Spacing: React.FC<SpacingProps> = ({ as = "div", ...rest }) => {
  return <Box component={as} {...rest} />;
};
