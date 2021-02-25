import styled, { css } from "styled-components";
import { RowProps } from "./RowContainer";
import { defaultProps } from "../../../theme";

const StyledTableRow = styled.tr`
  ${({ theme: { table } }) => css`
    &:last-child {
      td {
        :first-child {
          border-bottom-left-radius: ${table.borderRadius};
        }
        :last-child {
          border-bottom-right-radius: ${table.borderRadius};
        }
      }
    }
  `}
`;
StyledTableRow.defaultProps = defaultProps;

export const RowPresenter: React.FC<RowProps> = (props) => {
  return <StyledTableRow {...props} />;
};
