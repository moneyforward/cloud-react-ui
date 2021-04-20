import { render, fireEvent } from "@testing-library/react";
import { AsyncSelect } from "../AsyncSelect";

describe("AsyncSelect", () => {
  it("default", () => {
    const { asFragment } = render(<AsyncSelect />);
    expect(asFragment()).toMatchSnapshot();
  });

  xit("called onInputChange", () => {
    const options = [
      { value: "test1", label: "test1" },
      { value: "test2", label: "test2" },
    ];

    const handleInputChange = jest
      .fn()
      .mockResolvedValue((inputValue: string) => {
        options.filter((option) =>
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      });

    const { getByRole } = render(
      <AsyncSelect options={options} onInputChange={handleInputChange} />
    );
    fireEvent.input(getByRole("textbox"), "2");

    // TODO: not called...
    expect(handleInputChange).toBeCalledWith(1);
  });
});
