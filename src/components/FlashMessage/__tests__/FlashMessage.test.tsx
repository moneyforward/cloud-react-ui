import { render } from "@testing-library/react";
import { FlashMessage } from "../FlashMessage";

describe("FlashMessage", () => {
  it("snapshot test", () => {
    const { asFragment } = render(
      <FlashMessage color="success">flash message</FlashMessage>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
