import { render } from "@testing-library/react";
import { TextField } from "../TextField";

describe("TextField", () => {
  it("default", () => {
    const { asFragment, getByRole } = render(<TextField />);
    expect(asFragment()).toMatchSnapshot();

    expect(getByRole("textbox")).toHaveStyle("background-color: #FFFFFF");
    expect(getByRole("textbox")).toHaveStyle("border-color: #D4D8DD");
  });

  it("error props", () => {
    const { getByRole } = render(<TextField error={true} />);

    expect(getByRole("textbox")).toHaveStyle("background-color: #FFEEEB;");
    expect(getByRole("textbox")).toHaveStyle("border-color: #F57575;");
  });
});
