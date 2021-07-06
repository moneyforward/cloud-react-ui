import { render, fireEvent, screen } from "@testing-library/react";
import { Checkbox } from "../Checkbox";

describe("Checkbox", () => {
  it("default", () => {
    const { asFragment } = render(<Checkbox>checkbox</Checkbox>);
    expect(asFragment()).toMatchSnapshot();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeEnabled();
  });

  it("defaultChecked props", () => {
    render(<Checkbox defaultChecked={true}>checkbox</Checkbox>);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("disabled props", () => {
    render(<Checkbox disabled={true}>checkbox</Checkbox>);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("onChange, onClick props", () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    render(
      <Checkbox onChange={onChange} onClick={onClick}>
        checkbox
      </Checkbox>
    );
    fireEvent.click(screen.getByText("checkbox"));

    expect(onChange).toBeCalledTimes(1);
    expect(onClick).toBeCalledTimes(1);
  });
});
