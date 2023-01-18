import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('default', () => {
    const { asFragment } = render(<Checkbox>checkbox</Checkbox>);
    expect(asFragment()).toMatchSnapshot();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeEnabled();
  });

  it('defaultChecked props', () => {
    render(<Checkbox defaultChecked={true}>checkbox</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('disabled props', () => {
    render(<Checkbox disabled={true}>checkbox</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('onChange, onClick props', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    render(
      <Checkbox onChange={onChange} onClick={onClick}>
        checkbox
      </Checkbox>
    );
    fireEvent.click(screen.getByText('checkbox'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledTimes(1);
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

  it('value prop', () => {
    const onSubmit = jest.fn();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      onSubmit(formData.get('checkbox'));
    };
    const value = 'value';
    render(
      <form onSubmit={handleSubmit}>
        <Checkbox value={value} name="checkbox">
          checkbox
        </Checkbox>
        <input type="submit" />
      </form>
    );

    userEvent.click(screen.getByRole('checkbox', { name: 'checkbox' }));
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledWith(value);
  });
});
