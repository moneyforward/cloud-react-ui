import { Box } from "@material-ui/core";
import { SpacingProps } from "@material-ui/system";

export { SpacingProps };

// see: https://material-ui.com/system/spacing/
export const Spacing: React.FC<SpacingProps> = (props) => {
  return <Box {...props} />;
};
