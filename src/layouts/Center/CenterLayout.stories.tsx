import { CenterLayout } from "./CenterLayout";
import { Box, Text, Button } from "../../components";
import { ThemeProvider, createTheme } from "../../theme";

export default {
  component: CenterLayout,
  title: "Layouts/Center",
};

const centerBoxTheme = createTheme({
  centerLayout: {
    width: "500px",
  },
  box: {
    width: "500px",
    margin: "20px 0",
    padding: "30px",
    textAlign: "center",
  },
});

export const Center = (): React.ReactElement => (
  <ThemeProvider theme={centerBoxTheme}>
    <CenterLayout>
      <Box>
        <Text tag="p">Center Layout</Text>
        <Button color="primary">Center Layout</Button>
      </Box>
      <Box>
        <Text tag="p">Center Layout</Text>
        <Button color="primary">Center Layout</Button>
      </Box>
    </CenterLayout>
  </ThemeProvider>
);
