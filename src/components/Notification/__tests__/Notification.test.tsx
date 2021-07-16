import { render, screen } from "@testing-library/react";
import { Notification } from "../Notification";
import { defaultProps } from "../../../theme";

const colorSchema = defaultProps.theme.notification.backgroundColor;

describe("Notification", () => {
  it("should be in success colorSchema as default", () => {
    const { asFragment } = render(
      <Notification isOpen>Notification</Notification>
    );

    expect(screen.getByRole("alert")).toHaveStyle(
      `background-color: ${colorSchema.success}`
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be in warning colorSchema ", () => {
    const { asFragment } = render(
      <Notification color="warning" isOpen>
        Notification
      </Notification>
    );

    expect(screen.getByRole("alert")).toHaveStyle(
      `background-color: ${colorSchema.warning}`
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be in error colorSchema ", () => {
    const { asFragment } = render(
      <Notification color="error" isOpen>
        Notification
      </Notification>
    );

    expect(screen.getByRole("alert")).toHaveStyle(
      `background-color: ${colorSchema.error}`
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should not be in the screen unless isOpen is true", () => {
    render(<Notification>Notification</Notification>);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
