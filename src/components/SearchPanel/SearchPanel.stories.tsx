import { Story, Meta } from "@storybook/react";
import { SearchPanel } from "./SearchPanel";
import type { SearchPanelProps } from "./SearchPanel";
import { Button } from "../../components";
import { TextField, Checkbox } from "../../components";

export default {
  component: SearchPanel,
  title: "components/SearchPanel",
} as Meta;

const Template: Story<SearchPanelProps> = ({ children }) => (
  <SearchPanel>
    <form>
      <SearchPanel.Filters>
        <SearchPanel.Row>
          <SearchPanel.Column>
            <div>
              <label htmlFor="text-field-1">Text label</label>
              <TextField id="text-field-1" />
            </div>
          </SearchPanel.Column>
          <SearchPanel.Column>
            <div>
              <label htmlFor="text-field-1">Text label</label>
              <TextField id="text-field-1" />
            </div>
          </SearchPanel.Column>
        </SearchPanel.Row>
        <SearchPanel.Row>
          <SearchPanel.Column>
            <fieldset>
              <legend>Checkbox group</legend>
              <Checkbox>checkbox 1</Checkbox>
              <Checkbox>checkbox 2</Checkbox>
              <Checkbox>checkbox 3</Checkbox>
              <Checkbox>checkbox 4</Checkbox>
              <Checkbox>checkbox 5</Checkbox>
            </fieldset>
          </SearchPanel.Column>
          <SearchPanel.Column>
            <fieldset>
              <legend>Checkbox group</legend>
              <Checkbox>checkbox 1</Checkbox>
              <Checkbox>checkbox 2</Checkbox>
              <Checkbox>checkbox 3</Checkbox>
              <Checkbox>checkbox 4</Checkbox>
              <Checkbox>checkbox 5</Checkbox>
            </fieldset>
          </SearchPanel.Column>
        </SearchPanel.Row>
      </SearchPanel.Filters>
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
