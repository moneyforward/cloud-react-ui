import { Story, Meta } from "@storybook/react";
import { SearchPanel } from "./SearchPanel";
import type { SearchPanelProps } from "./SearchPanel";
import { Button, TextField, Checkbox } from "../../components";
import styled from "styled-components";

export default {
  component: SearchPanel,
  title: "components/SearchPanel",
} as Meta;

const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
`;

const Template: Story<SearchPanelProps> = () => (
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
              <label htmlFor="text-field-2">Text label</label>
              <TextField id="text-field-2" />
            </div>
          </SearchPanel.Column>
        </SearchPanel.Row>
        <SearchPanel.Row gap={80}>
          <SearchPanel.Column>
            <Fieldset>
              <legend>Checkbox group</legend>
              <Checkbox>checkbox 1</Checkbox>
              <Checkbox>checkbox 2</Checkbox>
              <Checkbox>checkbox 3</Checkbox>
              <Checkbox>checkbox 4</Checkbox>
              <Checkbox>checkbox 5</Checkbox>
            </Fieldset>
          </SearchPanel.Column>
          <SearchPanel.Column>
            <Fieldset>
              <legend>Checkbox group</legend>
              <Checkbox>checkbox 1</Checkbox>
              <Checkbox>checkbox 2</Checkbox>
              <Checkbox>checkbox 3</Checkbox>
              <Checkbox>checkbox 4</Checkbox>
              <Checkbox>checkbox 5</Checkbox>
            </Fieldset>
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
