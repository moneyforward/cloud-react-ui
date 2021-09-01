import styled, { css } from 'styled-components';
import { LinkProps } from './LinkContainer';
import { defaultProps } from '../../theme';

type LinkPresenterProps = Omit<
  LinkProps,
  'remoteModal' | 'method' | 'isEnabledOnlyOnceClick'
> & {
  rel?: string;
  'data-remote'?: boolean;
  'data-type'?: string;
  'data-method'?: LinkProps['method'];
  disabled: boolean;
};

const StyledLink = styled(({ tag: Tag, theme, ...rest }) => (
  <Tag {...rest} />
))<LinkProps>`
  ${({ theme: { link } }) => css`
    display: ${link.display};
    align-items: ${link.alignItems};
    width: ${link.width};
    min-height: ${link.minHeight};
    padding: ${link.padding};
    background-color: ${link.backgroundColor};
    color: ${link.color};
    text-decoration: ${link.textDecoration};

    &:visited {
      color: ${link.visited.color};
      text-decoration: ${link.visited.textDecoration};
    }
    &:focus {
      color: ${link.focus.color};
      text-decoration: ${link.focus.textDecoration};
    }
    &:active {
      color: ${link.active.color};
      text-decoration: ${link.active.textDecoration};
    }
    &:hover {
      cursor: pointer;
      color: ${link.hover.color};
      text-decoration: ${link.hover.textDecoration};
    }
    &.disabled {
      cursor: not-allowed;
      color: ${link.disabled.color};
    }
  `}
`;
StyledLink.defaultProps = defaultProps;

export const LinkPresenter: React.FC<LinkPresenterProps> = ({
  href,
  target,
  disabled,
  children,
  className,
  ...rest
}) => {
  if (disabled) {
    return (
      <StyledLink tag="span" className={`${className} disabled`}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLink
      tag="a"
      href={href}
      terget={target}
      className={className}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};
