import { render, fireEvent, screen } from '@testing-library/react';
import { Backdrop } from '../Backdrop';

describe('Backdrop', () => {
  it('snapshot test', () => {
    const { asFragment } = render(<Backdrop open onClick={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('called onClick', () => {
    const onClick = jest.fn();
    render(<Backdrop open onClick={onClick} data-testid="testid" />);
    fireEvent.click(screen.getByTestId('testid'));
    expect(onClick).toBeCalledTimes(1);
  });
});
