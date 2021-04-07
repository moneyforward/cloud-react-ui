import { render } from "@testing-library/react";
import { CircularProgress } from "../CircularProgress";

describe("CircularProgress", () => {
  it("snapshot test", () => {
    const { asFragment } = render(<CircularProgress />);
    expect(asFragment()).toMatchSnapshot();
  });
});
