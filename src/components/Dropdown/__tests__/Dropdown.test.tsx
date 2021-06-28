import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { Dropdown, DropdownProps, useDropdown } from "../../Dropdown";
import { Link } from "../../../components";

describe("Dropdown", () => {
  describe("Default", () => {
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

    it("renders", async () => {
      const { asFragment } = render(<Template toggleLabel="Label" />);
      fireEvent.click(screen.getByText("Label"));
      expect(screen.getByLabelText("Contents")).toBeVisible();
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders with placement", async () => {
      const { asFragment } = render(
        <Template toggleLabel="Label" placement="right" />
      );
      fireEvent.click(screen.getByText("Label"));
      expect(screen.getByLabelText("Contents")).toBeVisible();
      expect(asFragment()).toMatchSnapshot();
    });

    it("closes with action item", async () => {
      const { asFragment } = render(<Template toggleLabel="Label" />);
      fireEvent.click(screen.getByText("Label"));
      await waitFor(() => {
        fireEvent.click(screen.getAllByText("Link")[0]);
        expect(screen.queryByLabelText("Contents")).not.toBeVisible();
      });
      expect(asFragment()).toMatchSnapshot();
    });

    it("closes with overlay", async () => {
      const { asFragment } = render(<Template toggleLabel="Label" />);
      fireEvent.click(screen.getByText("Label"));
      await waitFor(() => {
        fireEvent.click(screen.getByLabelText("閉じる"));
        expect(screen.queryByLabelText("Contents")).not.toBeVisible();
      });
      expect(asFragment()).toMatchSnapshot();
    });

    it("keeps open with clicking isKeepOpen action item", async () => {
      const { asFragment } = render(<Template toggleLabel="Label" />);
      fireEvent.click(screen.getByRole("button"));
      await waitFor(() => {
        fireEvent.click(screen.getByLabelText("isKeepOpen"));
        expect(screen.getByLabelText("Contents")).toBeVisible();
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Multiple blocks", () => {
    it("renders", () => {
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

  describe("Anchored", () => {
    const AnchorButton = (): JSX.Element => {
      const { isActive, setIsActive } = useDropdown();
      const handleClick = () => {
        setIsActive(!isActive);
      };
      return (
        <button type="button" onClick={handleClick}>
          Toggle
        </button>
      );
    };

    const AnchoredTemplate = (args: DropdownProps): JSX.Element => {
      return (
        <Dropdown {...args}>
          <Dropdown.Block aria-label="Contents">
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
        </Dropdown>
      );
    };

    it("renders", async () => {
      const { asFragment } = render(
        <AnchoredTemplate toggleLabel="Label" anchor={<AnchorButton />} />
      );
      expect(screen.queryByText("Label")).not.toBeInTheDocument();
      fireEvent.click(screen.getByText("Toggle"));
      expect(screen.getByLabelText("Contents")).toBeVisible();
      expect(asFragment()).toMatchSnapshot();
    });

    it("closes with anchored toggle", async () => {
      const { asFragment } = render(
        <AnchoredTemplate anchor={<AnchorButton />} />
      );
      fireEvent.click(screen.getByText("Toggle"));
      await waitFor(() => {
        fireEvent.click(screen.getByText("Toggle"));
        expect(screen.queryByLabelText("Contents")).not.toBeVisible();
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
