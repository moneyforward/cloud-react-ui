import React from "react";
import styled from "styled-components";
import { defaultProps } from "../../theme";

import type { FooterProps } from "./FooterContainer";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: ${(props) => props.theme.footer.height};
  padding: ${(props) => props.theme.footer.padding};
  border-top: ${(props) => props.theme.footer.borderTop};
  background-color: ${(props) => props.theme.footer.backgroundColor};
`;
StyledFooter.defaultProps = defaultProps;

export function FooterPresenter({ children }: FooterProps): React.ReactElement {
  return <StyledFooter>{children}</StyledFooter>;
}
