import { render, fireEvent, screen } from '@testing-library/react';
import { useState } from 'react';
import { Radio } from '../Radio';

describe('Radio', () => {
  it('default', () => {
    const { asFragment } = render(<Radio id="radio-1">radio</Radio>);
    expect(asFragment()).toMatchSnapshot();

    const radio = screen.getByRole('radio');
    expect(radio).not.toBeChecked();
    expect(radio).toBeEnabled();
  });

  it('defaultChecked props', () => {
    render(
      <Radio id="radio-1" defaultChecked={true}>
        radio
      </Radio>
    );
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('disabled props', () => {
    render(
      <Radio id="radio-1" disabled={true}>
        radio
      </Radio>
    );
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('onChange, onClick props', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    render(
      <Radio id="radio-1" onChange={onChange} onClick={onClick}>
        radio
      </Radio>
    );
    fireEvent.click(screen.getByText('radio'));

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
        <Radio id="radio-1" checked={checked} onChange={handleChange}>
          radio
        </Radio>
      );
    };

    render(<TestForm />);

    expect(screen.getByRole('radio')).not.toBeChecked();
    fireEvent.click(screen.getByText('radio'));
    expect(screen.getByRole('radio')).toBeChecked();
  });
});
