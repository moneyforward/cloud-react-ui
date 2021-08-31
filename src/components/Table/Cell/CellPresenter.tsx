import styled, { css } from 'styled-components';
import { Group, BorderType } from '../Table/TableContainer';
import { CellProps } from './CellContainer';
import { defaultProps } from '../../../theme';

type CellPresenterProps = CellProps & { group: Group; borderType: BorderType };

const StyledTh = styled.th<Omit<CellPresenterProps, 'group'>>`
  ${({ theme: { table }, borderType }) => css`
    padding: ${table.th.padding};
    background-color: ${table.th.backgroundColor};

    // border-right
    ${borderType === 'border'
      ? css`
          border-right-width: ${table.borderWidth};
          border-right-style: ${table.borderStyle};
          border-right-color: ${table.borderColor};
        `
      : css`
          border-right: ${table.nonBorder};
        `}
    // border-bottom
      ${!borderType
      ? css`
          border-bottom-width: ${table.borderWidth};
          border-bottom-style: ${table.borderStyle};
          border-bottom-color: ${table.borderColor};
        `
      : css`
          border-bottom: ${table.nonBorder};
        `}

      text-align: ${table.th.textAlign};
    font-size: ${table.th.fontSize};
    font-weight: ${table.th.fontWeight};

    :last-child {
      border-right: ${table.nonBorder};
    }
  `}
`;
StyledTh.defaultProps = defaultProps;

const StyledTd = styled.td<Omit<CellPresenterProps, 'group'>>`
  ${({ theme: { table }, bold, borderType }) => css`
    padding: ${table.td.padding};
    background-color: ${table.td.backgroundColor};

    // border-top
    ${borderType === 'border' || borderType === 'rowBorder'
      ? css`
          border-top-width: ${table.borderWidth};
          border-top-style: ${table.borderStyle};
          border-top-color: ${table.borderColor};
        `
      : css`
          border-top: ${table.nonBorder};
        `}
    // border-right
      ${borderType === 'border'
      ? css`
          border-right-width: ${table.borderWidth};
          border-right-style: ${table.borderStyle};
          border-right-color: ${table.borderColor};
        `
      : css`
          border-right: ${table.nonBorder};
        `}

      text-align: ${table.td.textAlign};
    font-size: ${table.td.fontSize};
    font-weight: ${table.td.fontWeight[bold ? 'bold' : 'normal']};

    :last-child {
      border-right: none;
    }
  `}
`;
StyledTd.defaultProps = defaultProps;

export const CellPresenter: React.FC<CellPresenterProps> = ({
  group = 'body',
  bold = false,
  ...rest
}) => {
  return group === 'head' ? (
    <StyledTh {...rest} />
  ) : (
    <StyledTd bold={bold} {...rest} />
  );
};
