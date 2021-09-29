import { render, screen } from '@testing-library/react';
import { Block } from '../Block';

describe('Block', () => {
  it('snapshot test', () => {
    const { asFragment } = render(<Block>block</Block>);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('border props', () => {
    it('border=true', () => {
      render(
        <Block border data-testid="block">
          block
        </Block>
      );
      expect(screen.getByTestId('block')).toHaveStyle(
        'border: 1px solid #d4d8dd;'
      );
    });

    it('border=false', () => {
      render(<Block data-testid="block">block</Block>);
      expect(screen.getByTestId('block')).toHaveStyle('border: none;');
    });
  });
});
