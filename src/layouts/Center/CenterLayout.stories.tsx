import { ThemeProvider } from "styled-components";
import merge from "deepmerge";

import { theme } from "../../theme";
import { CenterLayout } from "./CenterLayout";
import { Box, Text, Button } from "../../components";

export default {
  component: CenterLayout,
  title: "Layouts/Center",
};

const centerBoxTheme = merge(theme, {
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
        <Text tag="p">Text</Text>
        <Button color="primary">Button</Button>
      </Box>
      <Box>
        <Text tag="p">Text</Text>
        <Button color="primary">Button</Button>
      </Box>
    </CenterLayout>
  </ThemeProvider>
);
