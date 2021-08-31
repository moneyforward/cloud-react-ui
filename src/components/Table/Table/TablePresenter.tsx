import styled, { css } from 'styled-components';
import { TableProps } from './TableContainer';
import { defaultProps } from '../../../theme';

const StyledTable = styled.table`
  ${({ theme: { table } }) => css`
    width: ${table.width};
    border-collapse: ${table.borderCollapse};
    border-spacing: ${table.borderSpacing};
    border-radius: ${table.borderRadius};
    border-width: ${table.borderWidth};
    border-style: ${table.borderStyle};
    border-color: ${table.borderColor};
  `}
`;
StyledTable.defaultProps = defaultProps;

export const TablePresenter: React.FC<TableProps> = (props) => {
  return <StyledTable {...props} />;
};
