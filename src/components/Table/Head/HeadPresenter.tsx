import styled, { css } from 'styled-components';
import { HeadProps } from './HeadContainer';
import { defaultProps } from '../../../theme';

const StyledTableHead = styled.thead`
  ${({ theme: { table } }) => css`
    & > tr:first-child {
      th,
      td {
        border-top: ${table.nonBorder};

        :first-child {
          border-top-left-radius: ${table.borderRadius};
        }
        :last-child {
          border-top-right-radius: ${table.borderRadius};
        }
      }
    }
  `}
`;
StyledTableHead.defaultProps = defaultProps;

export const HeadPresenter: React.FC<HeadProps> = (props) => {
  return <StyledTableHead {...props} />;
};
