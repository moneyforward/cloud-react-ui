import { TooltipProps as MuiTootipProps } from '@material-ui/core/Tooltip';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import MuiTooltip from '@material-ui/core/Tooltip';
import { defaultProps } from '../../theme';

export type TooltipProps = Pick<
  MuiTootipProps,
  'id' | 'title' | 'placement' | 'arrow' | 'className' | 'children' | 'classes'
>;

const StyledTooltip = styled(({ theme, className, ...rest }) => (
  <MuiTooltip
    classes={{ popper: className, tooltip: 'tooltip', arrow: 'arrow' }}
    {...rest}
  />
))<TooltipProps>`
  ${({ theme: { tooltip } }) => css`
    .tooltip {
      margin: ${tooltip.margin};
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

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    { placement = 'bottom', arrow = true, children, className, ...rest },
    ref
  ) => (
    <StyledTooltip ref={ref} arrow={arrow} placement={placement} {...rest}>
      <div style={{ display: 'inline-block' }} className={className}>
        {children}
      </div>
    </StyledTooltip>
  )
);

Tooltip.displayName = 'Tooltip';

export { Tooltip };
