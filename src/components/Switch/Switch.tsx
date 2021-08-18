import { forwardRef } from "react";
import MuiSwitch, {
  SwitchProps as MuiSwitchProps,
} from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../theme";

export type SwitchProps = MuiSwitchProps & {
  className?: string;
};

const useStyles = makeStyles(() => ({
  root: {
    width: 32,
    height: 20,
    padding: 0,
  },
  switchBase: {
    color: color.white,
    padding: 2,
    "&$checked": {
      transform: "translateX(12px)",
      color: color.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: color.royalBlue,
        borderColor: color.royalBlue,
      },
    },
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: "0 1px 4px rgba(0, 0, 0, .15)",
  },
  track: {
    borderRadius: 20 / 2,
    backgroundColor: color.linkWater,
    opacity: 1,
  },
  checked: {},
}));

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    const classes = useStyles();
    return (
      <MuiSwitch
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
        ref={ref}
      />
    );
  }
);

Switch.displayName = "Switch";
