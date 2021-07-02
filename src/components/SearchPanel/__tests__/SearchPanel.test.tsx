import { render, fireEvent } from "@testing-library/react";
import { SearchPanel } from "../SearchPanel";
import { Button } from "../../../components";

describe("SearchPanel", () => {
  const Template = (): JSX.Element => (
    <SearchPanel>
      <form>
        <SearchPanel.Filters>
          <SearchPanel.Row>
            <SearchPanel.Column>
              <div>SearchPanel.Body content</div>
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
    const { getByRole, queryByText } = render(<Template />);
    const button = getByRole("button", { expanded: false });

    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    expect(queryByText("SearchPanel.Body content")).toBeVisible();

    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(queryByText("SearchPanel.Body content")).not.toBeVisible();
  });
});
