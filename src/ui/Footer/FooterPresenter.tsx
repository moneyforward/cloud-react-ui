import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { FooterProps } from "./FooterContainer";
import { defaultProps } from "../../theme";

const FixedWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: ${theme.footer.zIndex};
  `}
`;
FixedWrapper.defaultProps = defaultProps;

const StyledFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: ${theme.footer.height};
    padding: ${theme.footer.padding};
    border-top: ${theme.footer.borderTop};
    background-color: ${theme.footer.backgroundColor};
  `}
`;
StyledFooter.defaultProps = defaultProps;

export function FooterPresenter({
  fixed = false,
  ...rest
}: FooterProps): React.ReactElement {
  const Footer = useMemo(() => <StyledFooter {...rest} />, [rest]);

  return fixed ? <FixedWrapper>{Footer}</FixedWrapper> : Footer;
}
