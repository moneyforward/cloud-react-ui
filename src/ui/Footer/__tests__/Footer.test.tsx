import { render } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('snapshot test', () => {
    const { asFragment } = render(<Footer>Footer</Footer>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot test (fixed)', () => {
    const { asFragment } = render(<Footer fixed>Footer</Footer>);
    expect(asFragment()).toMatchSnapshot();
  });
});
