import { render } from '@testing-library/react';
import { Block } from '../Block';

describe('Block', () => {
  it('snapshot test', () => {
    const { asFragment } = render(<Block>block</Block>);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('border props', () => {
    it('border=true', () => {
      const { container } = render(<Block border>block</Block>);
      expect(container.firstChild).toHaveStyle('border: 1px solid #d4d8dd;');
    });

    it('border=false', () => {
      const { container } = render(<Block>block</Block>);
      expect(container.firstChild).toHaveStyle('border: none;');
    });
  });
});
