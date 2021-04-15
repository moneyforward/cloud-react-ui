import { render } from "@testing-library/react";
import { StatusLabel } from "../StatusLabel";

describe("StatusLabel", () => {
  describe("snapshot test", () => {
    it("default", () => {
      const { asFragment } = render(
        <StatusLabel color="red">status label</StatusLabel>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("bold=true", () => {
      const { asFragment } = render(
        <StatusLabel color="gray" bold>
          status label(bold)
        </StatusLabel>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("outline=true", () => {
      const { asFragment } = render(
        <StatusLabel color="green" outline>
          status label(outline)
        </StatusLabel>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
