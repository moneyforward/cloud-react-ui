import { Story, Meta } from "@storybook/react";
import { SearchPanel } from "./SearchPanel";
import type { SearchPanelProps } from "./SearchPanel";
import { Button } from "../../components";

export default {
  component: SearchPanel,
  title: "components/SearchPanel",
} as Meta;

const Template: Story<SearchPanelProps> = ({ children }) => (
  <SearchPanel>
    <form>
      <SearchPanel.Filters>input要素が入る</SearchPanel.Filters>
      <SearchPanel.Actions>
        <SearchPanel.ButtonGroup>
          <Button color="settings">クリア</Button>
          <Button color="primary">検索</Button>
        </SearchPanel.ButtonGroup>
      </SearchPanel.Actions>
    </form>
  </SearchPanel>
);

export const Default = Template.bind({});
