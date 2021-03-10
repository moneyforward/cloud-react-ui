import { render } from "@testing-library/react";
import { Select } from "../Select";

describe("Select", () => {
  it("default", () => {
    const { asFragment, container } = render(<Select />);
    expect(asFragment()).toMatchSnapshot();

    expect(
      container.getElementsByClassName("react-select__control")[0]
    ).toHaveStyle("background-color: #FFFFFF");
  });

  it("error props", () => {
    const { container } = render(<Select error={true} />);

    expect(
      container.getElementsByClassName("react-select__control")[0]
    ).toHaveStyle("background-color: #FFF4F4");
  });
});
