import { render } from "@testing-library/react";
import { Dropdown, DropdownProps } from "../../Dropdown";
import { Link } from "../../../components";

describe("Dropdown", () => {
  const Template = (args: DropdownProps): JSX.Element => (
    <Dropdown {...args}>
      <Dropdown.Block>
        <Dropdown.Item>
          <Link href="#">ユーザー設定</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href="#">ユーザー設定</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href="#">ユーザー設定</Link>
        </Dropdown.Item>
      </Dropdown.Block>
    </Dropdown>
  );

  it("default", () => {
    const { asFragment } = render(<Template toggleLabel="ラベル" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("with placement", () => {
    const { asFragment } = render(
      <Template toggleLabel="ラベル" placement="right" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("with multiple blocks", () => {
    const { asFragment } = render(
      <Dropdown toggleLabel="ラベル">
        <Dropdown.Block>
          Blockを複数配置することで、内容を分割できます。
        </Dropdown.Block>
        <Dropdown.Block>
          <Dropdown.Item>
            <Link href="#">ユーザー設定</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="#">ユーザー設定</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="#">ユーザー設定</Link>
          </Dropdown.Item>
        </Dropdown.Block>
        <Dropdown.Block>
          Blockを複数配置することで、内容を分割できます。
        </Dropdown.Block>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
