import { ThemeProvider } from "styled-components";
import merge from "deepmerge";

import { theme } from "../../theme";
import { CenterBoxLayout } from "./CenterBoxLayout";
import { Text, Button } from "../../components";

export default {
  component: CenterBoxLayout,
  title: "Layouts/Center Box",
};

const centerBoxTheme = merge(theme, {
  centerLayout: {
    width: "300px",
  },
  box: {
    width: "300px",
    margin: "195px 0 100px 0",
    padding: "30px",
    textAlign: "center",
  },
});

export const CenterBox = (): React.ReactElement => (
  <ThemeProvider theme={centerBoxTheme}>
    <CenterBoxLayout>
      <Text tag="p">Text</Text>
      <Button color="primary">Button</Button>
    </CenterBoxLayout>
  </ThemeProvider>
);
