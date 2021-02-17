import { HeadPresenter } from "./HeadPresenter";
import { TableGroupContext } from "../Table/TableContainer";

export type HeadProps = {
  className?: string;
  children: React.ReactNode;
};

export function HeadContainer(props: HeadProps): React.ReactElement {
  return (
    <TableGroupContext.Provider value={{ group: "head" }}>
      <HeadPresenter {...props} />
    </TableGroupContext.Provider>
  );
}
