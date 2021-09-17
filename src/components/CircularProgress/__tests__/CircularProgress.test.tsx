import { render, screen } from '@testing-library/react';
import { CircularProgress } from '../CircularProgress';

describe('CircularProgress', () => {
  it('snapshot test', () => {
    const { asFragment } = render(<CircularProgress />);
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    {
      size: '3rem',
    },
    { size: 10 },
  ])('changes the size to $size', ({ size }) => {
    const { asFragment } = render(<CircularProgress size={size} />);
    const sizeWithUnit = typeof size === 'string' ? size : `${size}px`;
    const expected = `height: ${sizeWithUnit}; width: ${sizeWithUnit}`;

    expect(screen.getByRole('progressbar')).toHaveStyle(expected);
  });
});
