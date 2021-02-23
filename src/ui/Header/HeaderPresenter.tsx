import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { HeaderProps } from "./HeaderContainer";
import { defaultProps } from "../../theme";

const FixedWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${theme.header.zIndex};
  `}
`;
FixedWrapper.defaultProps = defaultProps;

const StyledHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: ${theme.header.height};
    padding: ${theme.header.padding};
    border-bottom: ${theme.header.borderBottom};
    background-color: ${theme.header.backgroundColor};
  `}
`;
StyledHeader.defaultProps = defaultProps;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export function HeaderPresenter({
  fixed = false,
  left,
  right,
  ...rest
}: HeaderProps): React.ReactElement {
  const Header = useMemo(
    () => (
      <StyledHeader {...rest}>
        <StyledLeft>{left}</StyledLeft>
        <StyledRight>{right}</StyledRight>
      </StyledHeader>
    ),
    [left, right, rest]
  );

  return fixed ? <FixedWrapper>{Header}</FixedWrapper> : Header;
}
