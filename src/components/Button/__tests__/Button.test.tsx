import { render, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("default", () => {
    const { asFragment } = render(<Button>button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("with icon", () => {
    const { asFragment } = render(
      <Button icon="bell" iconPlacement="start">
        button
      </Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
