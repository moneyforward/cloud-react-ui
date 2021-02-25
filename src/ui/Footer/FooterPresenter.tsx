import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { FooterProps } from "./FooterContainer";
import { defaultProps } from "../../theme";

const FixedWrapper = styled.div`
  ${({ theme: { footer } }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: ${footer.zIndex};
  `}
`;
FixedWrapper.defaultProps = defaultProps;

const StyledFooter = styled.footer`
  ${({ theme: { footer } }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: ${footer.height};
    padding: ${footer.padding};
    border-top: ${footer.borderTop};
    background-color: ${footer.backgroundColor};
    box-sizing: border-box;
  `}
`;
StyledFooter.defaultProps = defaultProps;

export const FooterPresenter: React.FC<FooterProps> = ({
  fixed = false,
  ...rest
}) => {
  const Footer = useMemo(() => <StyledFooter {...rest} />, [rest]);

  return fixed ? <FixedWrapper>{Footer}</FixedWrapper> : Footer;
};
