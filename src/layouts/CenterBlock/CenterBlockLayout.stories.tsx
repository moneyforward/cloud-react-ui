import { Story, Meta } from "@storybook/react";
import { CenterBlockLayout } from "./CenterBlockLayout";
import { Text, Button } from "../../components";
import { ThemeProvider, createTheme } from "../../theme";

export default {
  component: CenterBlockLayout,
  title: "Layouts/CenterBlock",
} as Meta;

const centerBlockTheme = createTheme({
  centerLayout: {
    width: "300px",
  },
  block: {
    width: "300px",
    margin: "195px 0 100px 0",
    padding: "30px",
    textAlign: "center",
  },
});

const Template: Story = () => (
  <ThemeProvider theme={centerBlockTheme}>
    <CenterBlockLayout>
      <Text tag="p">Center Block Layout</Text>
      <Button color="primary">Center Block Layout</Button>
    </CenterBlockLayout>
  </ThemeProvider>
);

export const Default = Template.bind({});
