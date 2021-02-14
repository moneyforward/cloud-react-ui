import React from "react";
import styled from "styled-components";
import { HeaderProps } from "./HeaderContainer";
import { defaultProps } from "@theme";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: ${(props) => props.theme.header.height};
  padding: ${(props) => props.theme.header.padding};
  border-bottom: ${(props) => props.theme.header.borderBottom};
  background-color: ${(props) => props.theme.header.backgroundColor};
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
  left,
  right,
  ...rest
}: HeaderProps): React.ReactElement {
  return (
    <StyledHeader {...rest}>
      <StyledLeft>{left}</StyledLeft>
      <StyledRight>{right}</StyledRight>
    </StyledHeader>
  );
}
