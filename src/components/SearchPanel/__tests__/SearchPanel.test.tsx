import { render, fireEvent } from "@testing-library/react";
import { SearchPanel, SearchPanelProps } from "../SearchPanel";
import { Button, TextField, Checkbox } from "../../../components";

describe("SearchPanel", () => {
  const Template = (args: SearchPanelProps): JSX.Element => (
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

  it("default", () => {
    const { asFragment } = render(<Template />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("onClick Toggle", () => {
    const { getByRole, baseElement } = render(<Template />);
    const button = getByRole("button", { expanded: true });
    const panelBody = baseElement.querySelector("div[aria-hidden]");

    fireEvent.click(button!);
    expect(button!.getAttribute("aria-expanded")).toBe("false");
    expect(panelBody!.getAttribute("aria-hidden")).toBe("true");

    fireEvent.click(button!);
    expect(button!.getAttribute("aria-expanded")).toBe("true");
    expect(panelBody!.getAttribute("aria-hidden")).toBe("false");
  });
});
