import { useMemo } from "react";
import styled, { css } from "styled-components";
import { HeaderProps } from "./HeaderContainer";
import { defaultProps } from "../../theme";

const FixedWrapper = styled.div`
  ${({ theme: { header } }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${header.zIndex};
  `}
`;
FixedWrapper.defaultProps = defaultProps;

const StyledHeader = styled.header`
  ${({ theme: { header } }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: ${header.height};
    padding: ${header.padding};
    border-bottom: ${header.borderBottom};
    background-color: ${header.backgroundColor};
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

export const HeaderPresenter: React.FC<HeaderProps> = ({
  fixed = false,
  left,
  right,
  ...rest
}) => {
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
};
