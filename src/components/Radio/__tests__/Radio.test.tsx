import { render, fireEvent, screen } from "@testing-library/react";
import { Radio } from "../Radio";

describe("Radio", () => {
  it("default", () => {
    const { asFragment } = render(<Radio>radio</Radio>);
    expect(asFragment()).toMatchSnapshot();

    const radio = screen.getByRole("radio");
    expect(radio).not.toBeChecked();
    expect(radio).toBeEnabled();
  });

  it("defaultChecked props", () => {
    render(<Radio defaultChecked={true}>radio</Radio>);
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("disabled props", () => {
    render(<Radio disabled={true}>radio</Radio>);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("onChange, onClick props", () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    render(
      <Radio onChange={onChange} onClick={onClick}>
        radio
      </Radio>
    );
    fireEvent.click(screen.getByText("radio"));

    expect(onChange).toBeCalledTimes(1);
    expect(onClick).toBeCalledTimes(1);
  });
});
