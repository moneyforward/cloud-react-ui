import { render, screen, fireEvent } from "@testing-library/react";
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

  it("should be in warning colorSchema", () => {
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

  it("should be in error colorSchema", () => {
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

  it("should be align center", () => {
    render(
      <Notification align="center" isOpen>
        Notification
      </Notification>
    );

    expect(screen.getByText("Notification")).toHaveStyle("text-align: center;");
  });

  describe("when props.isOpen changed", () => {
    it("state.isActive changed too", () => {
      const { rerender } = render(
        <Notification isOpen>Notification</Notification>
      );
      expect(screen.queryByRole("alert")).toBeInTheDocument();

      rerender(<Notification isOpen={false}>Notification</Notification>);
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  describe("when CloseButton is clicked", () => {
    const onClickClose = jest.fn();
    beforeEach(() => {
      render(
        <Notification isOpen onClickClose={onClickClose}>
          Notification
        </Notification>
      );
      fireEvent.click(screen.getByRole("button", { name: "閉じる" }));
    });

    it("props.onClickClose is called", () => {
      expect(onClickClose).toBeCalled();
    });

    it("should not be render", () => {
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });
});
