import { CenterLayout } from "./CenterLayout";
import { Block, Text, Button } from "../../components";
import { ThemeProvider, createTheme } from "../../theme";

export default {
  component: CenterLayout,
  title: "Layouts/Center",
};

const centerBoxTheme = createTheme({
  centerLayout: {
    width: "500px",
  },
  block: {
    width: "500px",
    margin: "20px 0",
    padding: "30px",
    textAlign: "center",
  },
});

export const Center: React.FC = () => (
  <ThemeProvider theme={centerBoxTheme}>
    <CenterLayout>
      <Block>
        <Text tag="p">Center Layout</Text>
        <Button color="primary">Center Layout</Button>
      </Block>
      <Block>
        <Text tag="p">Center Layout</Text>
        <Button color="primary">Center Layout</Button>
      </Block>
    </CenterLayout>
  </ThemeProvider>
);
