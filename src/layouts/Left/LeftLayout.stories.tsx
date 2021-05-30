import { Story, Meta } from "@storybook/react";
import { LeftLayout } from "./LeftLayout";
import { Block, Text, Button } from "../../components";
import { ThemeProvider, createTheme } from "../../theme";

export default {
  component: LeftLayout,
  title: "Layouts/Left",
} as Meta;

const centerBoxTheme = createTheme({
  leftLayout: {
    width: "500px",
    margin: "20px",
  },
  block: {
    width: "100%",
    margin: "20px 0",
    padding: "30px",
    textAlign: "center",
  },
});

const Template: Story = () => (
  <ThemeProvider theme={centerBoxTheme}>
    <LeftLayout>
      <Block>
        <Text tag="p">Left Layout</Text>
        <Button color="primary">Left Layout</Button>
      </Block>
      <Block>
        <Text tag="p">Left Layout</Text>
        <Button color="primary">Left Layout</Button>
      </Block>
    </LeftLayout>
  </ThemeProvider>
);

export const Default = Template.bind({});
