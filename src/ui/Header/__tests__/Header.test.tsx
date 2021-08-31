import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  it('snapshot test', () => {
    const { asFragment } = render(
      <Header>
        <Header.Name>
          <div>Service or page name</div>
        </Header.Name>
        <Header.Item>
          <div>Navigation, dropdown, etc.</div>
        </Header.Item>
      </Header>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot test (fixed)', () => {
    const { asFragment } = render(
      <Header fixed>
        <Header.Name>
          <div>Service or page name</div>
        </Header.Name>
        <Header.Item>
          <div>Navigation, dropdown, etc.</div>
        </Header.Item>
      </Header>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
