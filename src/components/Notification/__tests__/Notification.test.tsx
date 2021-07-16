import { render } from "@testing-library/react";
import { Notification } from "../Notification";

describe("Notification", () => {
  it("snapshot test", () => {
    const { asFragment } = render(
      <Notification color="success">Notification</Notification>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
