import { BodyPresenter } from "./BodyPresenter";
import { TableGroupContext } from "../Table/TableContainer";

export type BodyProps = {
  className?: string;
};

export const BodyContainer: React.FC<BodyProps> = (props) => {
  return (
    <TableGroupContext.Provider value={{ group: "body" }}>
      <BodyPresenter {...props} />
    </TableGroupContext.Provider>
  );
};
