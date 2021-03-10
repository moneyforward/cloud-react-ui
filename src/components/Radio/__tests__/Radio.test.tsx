import { render, fireEvent } from "@testing-library/react";
import { Radio } from "../Radio";

describe("Radio", () => {
  it("default", () => {
    const { asFragment, getByRole } = render(<Radio>radio</Radio>);
    expect(asFragment()).toMatchSnapshot();

    const radio = getByRole("radio");
    expect(radio).not.toBeChecked();
    expect(radio).not.toBeDisabled();
  });

  it("defaultChecked props", () => {
    const { getByRole } = render(<Radio defaultChecked={true}>radio</Radio>);
    expect(getByRole("radio")).toBeChecked();
  });

  it("disabled props", () => {
    const { getByRole } = render(<Radio disabled={true}>radio</Radio>);
    expect(getByRole("radio")).toBeDisabled();
  });

  it("onChange, onClick props", () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(
      <Radio onChange={onChange} onClick={onClick}>
        radio
      </Radio>
    );
    fireEvent.click(getByText("radio"));

    expect(onChange).toBeCalledTimes(1);
    expect(onClick).toBeCalledTimes(1);
  });
});
