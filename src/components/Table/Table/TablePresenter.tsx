import styled, { css } from "styled-components";
import { TableProps } from "./TableContainer";
import { defaultProps } from "../../../theme";

const StyledTable = styled.table`
  ${({ theme }) => css`
    width: ${theme.table.width};
    border-collapse: ${theme.table.borderCollapse};
    border-spacing: ${theme.table.borderSpacing};
    border-radius: ${theme.table.borderRadius};
    border-width: ${theme.table.borderWidth};
    border-style: ${theme.table.borderStyle};
    border-color: ${theme.table.borderColor};
  `}
`;
StyledTable.defaultProps = defaultProps;

export function TablePresenter(props: TableProps): React.ReactElement {
  return <StyledTable {...props} />;
}
