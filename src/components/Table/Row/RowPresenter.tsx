import styled, { css } from "styled-components";
import { RowProps } from "./RowContainer";
import { defaultProps } from "@theme";

const StyledTableRow = styled.tr`
  ${({ theme }) => css`
    &:last-child {
      td {
        :first-child {
          border-bottom-left-radius: ${theme.table.borderRadius};
        }
        :last-child {
          border-bottom-right-radius: ${theme.table.borderRadius};
        }
      }
    }
  `}
`;
StyledTableRow.defaultProps = defaultProps;

export function RowPresenter(props: RowProps): React.ReactElement {
  return <StyledTableRow {...props} />;
}
