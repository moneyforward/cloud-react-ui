import styled, { css } from "styled-components";
import { BodyProps } from "./BodyContainer";
import { defaultProps } from "@theme";

const StyledTableBody = styled.tbody`
  ${({ theme }) => css`
    & > tr:last-child {
      th,
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
StyledTableBody.defaultProps = defaultProps;

export function BodyPresenter(props: BodyProps): React.ReactElement {
  return <StyledTableBody {...props} />;
}
