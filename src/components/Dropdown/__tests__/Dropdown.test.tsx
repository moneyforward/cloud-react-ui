import { render } from "@testing-library/react";
import { Dropdown } from "../../Dropdown";
import { Link } from "../../../components";

describe("Button", () => {
  it("default", () => {
    const { asFragment } = render(
      <Dropdown toggleLabel="ラベル">
        <Dropdown.Block>
          <Dropdown.Menu>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown.Block>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("with placement", () => {
    const { asFragment } = render(
      <Dropdown toggleLabel="ラベル" placement="right">
        <Dropdown.Block>
          <Dropdown.Menu>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown.Block>
      </Dropdown>
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
          <Dropdown.Menu>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
            <Dropdown.MenuItem>
              <Link href="#">ユーザー設定</Link>
            </Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown.Block>
        <Dropdown.Block>
          Blockを複数配置することで、内容を分割できます。
        </Dropdown.Block>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
