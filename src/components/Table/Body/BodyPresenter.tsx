import styled, { css } from "styled-components";
import { BodyProps } from "./BodyContainer";
import { defaultProps } from "../../../theme";

const StyledTableBody = styled.tbody`
  ${({ theme: { table } }) => css`
    & > tr:last-child {
      th,
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
StyledTableBody.defaultProps = defaultProps;

export const BodyPresenter: React.FC<BodyProps> = (props) => {
  return <StyledTableBody {...props} />;
};
