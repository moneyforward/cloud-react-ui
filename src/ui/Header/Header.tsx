import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  fixed?: boolean;
  className?: string;
};

const StyledHeader = styled.header<Props>`
  ${({ theme: { header }, fixed }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: ${header.height};
    padding: ${header.padding};
    border-bottom: ${header.borderBottom};
    background-color: ${header.backgroundColor};
    box-sizing: border-box;

    ${fixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: ${header.zIndex};
    `};
  `}
`;
StyledHeader.defaultProps = defaultProps;

const Name = styled.div`
  display: flex;
  align-items: center;
`;
Name.displayName = "Header.Name";

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
Item.displayName = "Header.Item";

export const Header = Object.assign(StyledHeader, { Name, Item });
