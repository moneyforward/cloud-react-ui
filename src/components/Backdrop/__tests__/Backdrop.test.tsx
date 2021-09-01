import { render, fireEvent } from '@testing-library/react';
import { Backdrop } from '../Backdrop';

describe('Backdrop', () => {
  it('snapshot test', () => {
    const { asFragment } = render(<Backdrop open onClick={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('called onClick', () => {
    const onClick = jest.fn();
    const { container } = render(<Backdrop open onClick={onClick} />);
    fireEvent.click(container.getElementsByClassName('MuiBackdrop-root')[0]);
    expect(onClick).toBeCalledTimes(1);
  });
});
