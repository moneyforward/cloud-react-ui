import { render, fireEvent, screen } from '@testing-library/react';
import { useState } from 'react';
import { Radio } from '../Radio';

describe('Radio', () => {
  it('default', () => {
    const { asFragment, getByRole } = render(<Radio>radio</Radio>);
    expect(asFragment()).toMatchSnapshot();

    const radio = getByRole('radio');
    expect(radio).not.toBeChecked();
    expect(radio).not.toBeDisabled();
  });

  it('defaultChecked props', () => {
    const { getByRole } = render(<Radio defaultChecked={true}>radio</Radio>);
    expect(getByRole('radio')).toBeChecked();
  });

  it('disabled props', () => {
    const { getByRole } = render(<Radio disabled={true}>radio</Radio>);
    expect(getByRole('radio')).toBeDisabled();
  });

  it('onChange, onClick props', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(
      <Radio onChange={onChange} onClick={onClick}>
        radio
      </Radio>
    );
    fireEvent.click(getByText('radio'));

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
        <Radio checked={checked} onChange={handleChange}>
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
