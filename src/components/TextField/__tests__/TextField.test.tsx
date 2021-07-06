import { render, screen } from "@testing-library/react";
import { TextField } from "../TextField";

describe("TextField", () => {
  it("default", () => {
    const { asFragment } = render(<TextField />);
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByRole("textbox")).toHaveStyle("background-color: #FFFFFF");
    expect(screen.getByRole("textbox")).toHaveStyle("border-color: #D4D8DD");
  });

  it("error props", () => {
    render(<TextField error={true} />);

    expect(screen.getByRole("textbox")).toHaveStyle("background-color: #FFEEEB;");
    expect(screen.getByRole("textbox")).toHaveStyle("border-color: #F57575;");
  });
});
