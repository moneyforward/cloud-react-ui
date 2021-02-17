import { createContext, useContext } from "react";
import { TablePresenter } from "./TablePresenter";

export type Group = "head" | "body";
export const TableGroupContext = createContext<{ group: Group }>({
  group: "body",
});

export type BorderType = "border" | "rowBorder" | undefined;
export const TableBorderContext = createContext<{ borderType: BorderType }>({
  borderType: undefined,
});

export type TableProps = {
  borderType?: BorderType;
  className?: string;
  children: React.ReactNode;
};

export function TableContainer({
  borderType,
  ...rest
}: TableProps): React.ReactElement {
  return (
    <TableBorderContext.Provider value={{ borderType }}>
      <TablePresenter {...rest} />
    </TableBorderContext.Provider>
  );
}
