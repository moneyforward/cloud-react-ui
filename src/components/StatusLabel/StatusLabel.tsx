import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { defaultProps } from '../../theme';

export type Props = {
  color: 'gray' | 'red' | 'green' | 'orange' | 'blue';
  bold?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const StyledStatusLabel = styled.span<Props>`
  ${({ color, bold = false, outline = false, theme: { statusLabel } }) => css`
    display: ${statusLabel.display};
    height: ${statusLabel.height[outline ? 'outline' : 'default']};
    padding: ${statusLabel.padding[outline ? 'outline' : 'default']};
    line-height: ${statusLabel.lineHeight};
    background-color: ${statusLabel.backgroundColor[
      outline ? 'outline' : color
    ]};
    border-width: ${statusLabel.borderWidth};
    border-style: ${statusLabel.borderStyle};
    border-color: ${statusLabel.borderColor[color]};
    border-radius: ${statusLabel.borderRadius};
    color: ${outline
      ? statusLabel.borderColor[color]
      : statusLabel.color[color]};
    font-size: ${statusLabel.fontSize};
    font-weight: ${statusLabel.fontWeight[bold ? 'bold' : 'normal']};
    box-sizing: border-box;
  `}
`;
StyledStatusLabel.defaultProps = defaultProps;

const StatusLabel = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledStatusLabel ref={ref} {...props} />
));

StatusLabel.displayName = 'StatusLabel';

export { StatusLabel };
