import { useContext } from "react";
import { CellPresenter } from "./CellPresenter";
import { TableGroupContext, TableBorderContext } from "../Table/TableContainer";

export type CellProps = {
  width?: string;
  rowSpan?: number;
  colSpan?: number;
  bold?: boolean;
  className?: string;
};

export const CellContainer: React.FC<CellProps> = (props) => {
  const { group } = useContext(TableGroupContext);
  const { borderType } = useContext(TableBorderContext);

  return <CellPresenter group={group} borderType={borderType} {...props} />;
};
