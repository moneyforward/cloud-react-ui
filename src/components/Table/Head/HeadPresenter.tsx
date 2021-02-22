import styled, { css } from "styled-components";
import { HeadProps } from "./HeadContainer";
import { defaultProps } from "../../../theme";

const StyledTableHead = styled.thead`
  ${({ theme }) => css`
    & > tr:first-child {
      th,
      td {
        border-top: ${theme.table.nonBorder};

        :first-child {
          border-top-left-radius: ${theme.table.borderRadius};
        }
        :last-child {
          border-top-right-radius: ${theme.table.borderRadius};
        }
      }
    }
  `}
`;
StyledTableHead.defaultProps = defaultProps;

export function HeadPresenter(props: HeadProps): React.ReactElement {
  return <StyledTableHead {...props} />;
}
