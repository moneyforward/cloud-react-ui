import { render } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  it("snapshot test", () => {
    const { asFragment } = render(
      <Header left={<div>left</div>} right={<div>right</div>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("snapshot test (fixed)", () => {
    const { asFragment } = render(
      <Header fixed left={<div>left</div>} right={<div>right</div>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
