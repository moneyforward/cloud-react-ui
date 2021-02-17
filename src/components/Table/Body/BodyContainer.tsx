import { BodyPresenter } from "./BodyPresenter";
import { TableGroupContext } from "../Table/TableContainer";

export type BodyProps = {
  className?: string;
  children: React.ReactNode;
};

export function BodyContainer(props: BodyProps): React.ReactElement {
  return (
    <TableGroupContext.Provider value={{ group: "body" }}>
      <BodyPresenter {...props} />
    </TableGroupContext.Provider>
  );
}
