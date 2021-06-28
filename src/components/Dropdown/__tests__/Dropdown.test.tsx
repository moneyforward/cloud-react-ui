import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Dropdown, DropdownProps } from "../../Dropdown";
import { Link } from "../../../components";
import { useState } from "react";

describe("Dropdown", () => {
  const Template = (args: DropdownProps): JSX.Element => {
    return (
      <Dropdown {...args}>
        <Dropdown.Block aria-label="Contents">
          <Dropdown.ActionItem>
            <Link href="#">Link</Link>
          </Dropdown.ActionItem>
          <Dropdown.ActionItem>
            <button>Button</button>
          </Dropdown.ActionItem>
          <Dropdown.ActionItem isKeepOpen aria-label="isKeepOpen">
            <Link href="#">Link(isKeepOpen)</Link>
          </Dropdown.ActionItem>
        </Dropdown.Block>
      </Dropdown>
    );
  };

  it("default", async () => {
    const { asFragment } = render(<Template toggleLabel="Label" />);
    fireEvent.click(screen.getByText("Label"));
    expect(screen.getByLabelText("Contents")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("with placement", async () => {
    const { asFragment } = render(
      <Template toggleLabel="Label" placement="right" />
    );
    fireEvent.click(screen.getByText("Label"));
    expect(screen.getByLabelText("Contents")).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("close", async () => {
    const { asFragment } = render(<Template toggleLabel="Label" />);
    fireEvent.click(screen.getByText("Label"));
    await waitFor(() => {
      fireEvent.click(screen.getAllByText("Link")[0]);
      expect(screen.queryByLabelText("Contents")).not.toBeVisible();
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("close with overlay", async () => {
    const { asFragment } = render(<Template toggleLabel="Label" />);
    fireEvent.click(screen.getByText("Label"));
    await waitFor(() => {
      fireEvent.click(screen.getByLabelText("閉じる"));
      expect(screen.queryByLabelText("Contents")).not.toBeVisible();
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("keep open with clicking isKeepOpen link ", async () => {
    const { asFragment } = render(<Template toggleLabel="Label" />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      fireEvent.click(screen.getByLabelText("isKeepOpen"));
      expect(screen.getByLabelText("Contents")).toBeVisible();
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("with multiple blocks", () => {
    const MultipleTemplate = (args: DropdownProps): JSX.Element => {
      return (
        <Dropdown {...args}>
          <Dropdown.Block>
            <Dropdown.Item>Block</Dropdown.Item>
          </Dropdown.Block>
          <Dropdown.Block>
            <Dropdown.ActionItem>
              <Link href="#">Link</Link>
            </Dropdown.ActionItem>
            <Dropdown.ActionItem>
              <Link href="#">Link</Link>
            </Dropdown.ActionItem>
            <Dropdown.ActionItem>
              <Link href="#">Link</Link>
            </Dropdown.ActionItem>
          </Dropdown.Block>
          <Dropdown.Block>
            <Dropdown.Item>Block</Dropdown.Item>
          </Dropdown.Block>
        </Dropdown>
      );
    };

    const { asFragment } = render(<MultipleTemplate toggleLabel="Label" />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByText("Block")).toHaveLength(2);
    expect(screen.getAllByRole("link")).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });
});
