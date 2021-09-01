import { render, fireEvent } from '@testing-library/react';
import { Switch } from '../Switch';

describe('Switch', () => {
  it('default', () => {
    const { asFragment, getByRole } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();

    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBeDisabled();
  });

  it('defaultChecked props', () => {
    const { getByRole } = render(<Switch defaultChecked={true} />);
    expect(getByRole('checkbox')).toBeChecked();
  });

  it('disabled props', () => {
    const { getByRole } = render(<Switch disabled={true} />);
    expect(getByRole('checkbox')).toBeDisabled();
  });

  it('onChange, onClick props', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const { getByRole } = render(
      <Switch onChange={onChange} onClick={onClick} />
    );
    fireEvent.click(getByRole('checkbox'));

    expect(onChange).toBeCalledTimes(1);
    expect(onClick).toBeCalledTimes(1);
  });
});
