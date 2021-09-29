import { render, fireEvent, screen } from '@testing-library/react';
import { Switch } from '../Switch';

describe('Switch', () => {
  it('default', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeEnabled();
  });

  it('defaultChecked props', () => {
    render(<Switch defaultChecked={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('disabled props', () => {
    render(<Switch disabled={true} />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('onChange, onClick props', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    render(<Switch onChange={onChange} onClick={onClick} />);
    fireEvent.click(screen.getByRole('checkbox'));

    expect(onChange).toBeCalledTimes(1);
    expect(onClick).toBeCalledTimes(1);
  });
});
