import { render, fireEvent, screen } from '@testing-library/react';
import { useState } from 'react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('default', () => {
    const { asFragment, getByRole } = render(<Checkbox>checkbox</Checkbox>);
    expect(asFragment()).toMatchSnapshot();

    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBeDisabled();
  });

  it('defaultChecked props', () => {
    const { getByRole } = render(
      <Checkbox defaultChecked={true}>checkbox</Checkbox>
    );
    expect(getByRole('checkbox')).toBeChecked();
  });

  it('disabled props', () => {
    const { getByRole } = render(<Checkbox disabled={true}>checkbox</Checkbox>);
    expect(getByRole('checkbox')).toBeDisabled();
  });

  it('onChange, onClick props', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(
      <Checkbox onChange={onChange} onClick={onClick}>
        checkbox
      </Checkbox>
    );
    fireEvent.click(getByText('checkbox'));

    expect(onChange).toBeCalledTimes(1);
    expect(onClick).toBeCalledTimes(1);
  });

  it('checked, onChange props', () => {
    const TestForm = () => {
      const [checked, setChecked] = useState(false);
      const handleChange = () => {
        setChecked((prev) => !prev);
      };

      return (
        <Checkbox checked={checked} onChange={handleChange}>
          checkbox
        </Checkbox>
      );
    };

    render(<TestForm />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();
    fireEvent.click(screen.getByText('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
