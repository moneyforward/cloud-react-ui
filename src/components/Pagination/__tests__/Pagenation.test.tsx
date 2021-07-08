import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "../Pagination";

describe("Pagination", () => {
  it("default", () => {
    const { asFragment } = render(
      <Pagination>
        <Pagination.Item>
          <Pagination.Prev href="#" disabled />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#" current>
            1
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next href="#" />
        </Pagination.Item>
      </Pagination>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Pagination.Item", () => {
  it("renders", () => {
    const { asFragment } = render(<Pagination.Item>Item</Pagination.Item>);
    expect(screen.getByText("Item")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Pagination.Link", () => {
  it("should have aria-current with a current prop", () => {
    render(
      <Pagination.Link href="#" current>
        1
      </Pagination.Link>
    );
    expect(screen.getByRole("link")).toHaveAttribute("aria-current", "page");
  });

  it("should called onClick with click", () => {
    const onClick = jest.fn();
    render(<Pagination.Link onClick={onClick}>Link</Pagination.Link>);

    fireEvent.click(screen.getByText("Link"));
    expect(onClick).toBeCalled();
  });
});

describe("Pagination.Prev", () => {
  it("should have aria-disabled with a disabled prop", () => {
    render(<Pagination.Prev href="#" disabled />);
    expect(screen.getByLabelText("前のページ")).toHaveAttribute(
      "aria-disabled"
    );
  });
});

describe("Pagination.Next", () => {
  it("should have aria-disabled with a disabled prop", () => {
    render(<Pagination.Next href="#" disabled />);
    expect(screen.getByLabelText("次のページ")).toHaveAttribute(
      "aria-disabled"
    );
  });
});
