import styled, { css } from "styled-components";
import { Group, BorderType } from "../Table/TableContainer";
import { CellProps } from "./CellContainer";
import { defaultProps } from "@theme";

type CellPresenterProps = CellProps & { group: Group; borderType: BorderType };

const StyledTh = styled.th<Omit<CellPresenterProps, "group">>`
  ${({ theme, borderType }) => {
    return css`
      padding: ${theme.table.th.padding};
      background-color: ${theme.table.th.backgroundColor};

      // border-right
      ${borderType === "border"
        ? css`
            border-right-width: ${theme.table.borderWidth};
            border-right-style: ${theme.table.borderStyle};
            border-right-color: ${theme.table.borderColor};
          `
        : css`
            border-right: ${theme.table.nonBorder};
          `}
      // border-bottom
      ${!borderType
        ? css`
            border-bottom-width: ${theme.table.borderWidth};
            border-bottom-style: ${theme.table.borderStyle};
            border-bottom-color: ${theme.table.borderColor};
          `
        : css`
            border-bottom: ${theme.table.nonBorder};
          `}

      text-align: ${theme.table.th.textAlign};
      font-size: ${theme.table.th.fontSize};
      font-weight: ${theme.table.th.fontWeight};

      :last-child {
        border-right: ${theme.table.nonBorder};
      }
    `;
  }}
`;
StyledTh.defaultProps = defaultProps;

const StyledTd = styled.td<Omit<CellPresenterProps, "group">>`
  ${({ theme, bold, borderType }) => {
    return css`
      padding: ${theme.table.td.padding};
      background-color: ${theme.table.td.backgroundColor};

      // border-top
      ${borderType === "border" || borderType === "rowBorder"
        ? css`
            border-top-width: ${theme.table.borderWidth};
            border-top-style: ${theme.table.borderStyle};
            border-top-color: ${theme.table.borderColor};
          `
        : css`
            border-top: ${theme.table.nonBorder};
          `}
      // border-right
      ${borderType === "border"
        ? css`
            border-right-width: ${theme.table.borderWidth};
            border-right-style: ${theme.table.borderStyle};
            border-right-color: ${theme.table.borderColor};
          `
        : css`
            border-right: ${theme.table.nonBorder};
          `}

      text-align: ${theme.table.td.textAlign};
      font-size: ${theme.table.td.fontSize};
      font-weight: ${theme.table.td.fontWeight[bold ? "bold" : "normal"]};

      :last-child {
        border-right: none;
      }
    `;
  }}
`;
StyledTd.defaultProps = defaultProps;

export function CellPresenter({
  group = "body",
  bold = false,
  ...rest
}: CellPresenterProps): React.ReactElement {
  return group === "head" ? (
    <StyledTh {...rest} />
  ) : (
    <StyledTd bold={bold} {...rest} />
  );
}
