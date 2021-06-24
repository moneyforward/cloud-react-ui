import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Dropdown, DropdownBodyProps } from "../../Dropdown";
import { Link } from "../../../components";
import { useState } from "react";

type Props = Pick<DropdownBodyProps, "placement">;

describe("Dropdown", () => {
  const Template = (args: Props): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleClose = () => {
      setIsOpen(false);
    };
    return (
      <Dropdown>
        <Dropdown.ToggleButton onClick={handleToggle} isOpen={isOpen}>
          ButtonLabel
        </Dropdown.ToggleButton>
        <Dropdown.Body
          width="200px"
          isHidden={!isOpen}
          placement={args["placement"]}
        >
          <Dropdown.Block>
            <Dropdown.Item collapsed onClick={handleClose}>
              <Link href="#">Link</Link>
            </Dropdown.Item>
            <Dropdown.Item collapsed onClick={handleClose}>
              <Link href="#">Link</Link>
            </Dropdown.Item>
            <Dropdown.Item collapsed onClick={handleClose}>
              <Link href="#">Link</Link>
            </Dropdown.Item>
          </Dropdown.Block>
        </Dropdown.Body>
      </Dropdown>
    );
  };

  it("default", async () => {
    const { asFragment } = render(<Template />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("link")).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });

  it("with placement", async () => {
    const { asFragment } = render(<Template placement="right" />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("link")).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });

  it("close", async () => {
    const { asFragment } = render(<Template />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      fireEvent.click(screen.getAllByText("Link")[0]);
      expect(screen.queryAllByRole("link")).not.toBeVisible;
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("with multiple blocks", () => {
    const MultipleTemplate = (): JSX.Element => {
      const [isOpen, setIsOpen] = useState(false);

      const handleToggle = () => {
        setIsOpen(!isOpen);
      };
      return (
        <Dropdown>
          <Dropdown.ToggleButton onClick={handleToggle} isOpen={isOpen}>
            ButtonLabel
          </Dropdown.ToggleButton>
          <Dropdown.Body width="200px" isHidden={!isOpen}>
            <Dropdown.Block>Block</Dropdown.Block>
            <Dropdown.Block>
              <Dropdown.Item collapsed>
                <Link href="#">Link</Link>
              </Dropdown.Item>
              <Dropdown.Item collapsed>
                <Link href="#">Link</Link>
              </Dropdown.Item>
              <Dropdown.Item collapsed>
                <Link href="#">Link</Link>
              </Dropdown.Item>
            </Dropdown.Block>
            <Dropdown.Block>Block</Dropdown.Block>
          </Dropdown.Body>
        </Dropdown>
      );
    };

    const { asFragment } = render(<MultipleTemplate />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByText("Block")).toHaveLength(2);
    expect(screen.getAllByRole("link")).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });
});
