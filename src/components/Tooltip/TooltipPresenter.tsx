import styled, { css } from "styled-components";
import MuiTooltip from "@material-ui/core/Tooltip";
import { TooltipProps } from "./TooltipContainer";
import { defaultProps } from "../../theme";

const StyledTooltip = styled(({ theme, className, ...rest }) => (
  <MuiTooltip
    classes={{ popper: className, tooltip: "tooltip", arrow: "arrow" }}
    {...rest}
  />
))<TooltipProps>`
  ${({ theme: { tooltip } }) => css`
    .tooltip {
      height: ${tooltip.height};
      padding: ${tooltip.padding};
      background-color: ${tooltip.backgroundColor};
      border-radius: ${tooltip.borderRadius};
      font-size: ${tooltip.fontSize};
      color: ${tooltip.color};
    }

    .arrow {
      color: ${tooltip.backgroundColor};
    }
  `}
`;
StyledTooltip.defaultProps = defaultProps;

export const TooltipPresenter: React.FC<TooltipProps> = ({
  message,
  placement = "bottom",
  arrow = true,
  children,
  className,
}) => {
  return (
    <StyledTooltip arrow={arrow} title={message} placement={placement}>
      <div style={{ display: "inline-block" }} className={className}>
        {children}
      </div>
    </StyledTooltip>
  );
};
