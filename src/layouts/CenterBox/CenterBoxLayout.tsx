import { CenterLayout } from "../Center";
import { Box } from "../../components";

export const CenterBoxLayout: React.FC = ({ children }) => {
  return (
    <CenterLayout>
      <Box>{children}</Box>
    </CenterLayout>
  );
};
