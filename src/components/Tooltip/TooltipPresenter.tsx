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
  ${({ theme }) => {
    return css`
      .tooltip {
        height: ${theme.tooltip.height};
        padding: ${theme.tooltip.padding};
        background-color: ${theme.tooltip.backgroundColor};
        border-radius: ${theme.tooltip.borderRadius};
        font-size: ${theme.tooltip.fontSize};
        color: ${theme.tooltip.color};
      }

      .arrow {
        color: ${theme.tooltip.backgroundColor};
      }
    `;
  }}
`;
StyledTooltip.defaultProps = defaultProps;

export function TooltipPresenter({
  message,
  placement = "bottom",
  arrow = true,
  children,
  className,
}: TooltipProps): React.ReactElement {
  return (
    <StyledTooltip arrow={arrow} title={message} placement={placement}>
      <div style={{ display: "inline-block" }} className={className}>
        {children}
      </div>
    </StyledTooltip>
  );
}
