import { Story, Meta } from "@storybook/react";
import { SearchPanel } from "./SearchPanel";
import type { SearchPanelProps } from "./SearchPanel";

export default {
  component: SearchPanel,
  title: "components/SearchPanel",
} as Meta;

const Template: Story<SearchPanelProps> = ({ children }) => (
  <SearchPanel>
    <SearchPanel.Body>{children}</SearchPanel.Body>
    <SearchPanel.Actions>Button</SearchPanel.Actions>
  </SearchPanel>
);

export const Default = Template.bind({});
