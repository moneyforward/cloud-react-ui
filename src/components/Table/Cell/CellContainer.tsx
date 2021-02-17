import { useContext } from "react";
import { CellPresenter } from "./CellPresenter";
import { TableGroupContext, TableBorderContext } from "../Table/TableContainer";

export type CellProps = {
  rowSpan?: number;
  colSpan?: number;
  bold?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function CellContainer(props: CellProps): React.ReactElement {
  const { group } = useContext(TableGroupContext);
  const { borderType } = useContext(TableBorderContext);

  return <CellPresenter group={group} borderType={borderType} {...props} />;
}
