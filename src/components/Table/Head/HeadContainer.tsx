import { HeadPresenter } from "./HeadPresenter";
import { TableGroupContext } from "../Table/TableContainer";

export type HeadProps = {
  className?: string;
};

export const HeadContainer: React.FC<HeadProps> = (props) => {
  return (
    <TableGroupContext.Provider value={{ group: "head" }}>
      <HeadPresenter {...props} />
    </TableGroupContext.Provider>
  );
};
