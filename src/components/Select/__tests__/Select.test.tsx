import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from '../Select';

const Indicator = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z"
      fill="#7C8291"
    />
  </svg>
);

describe('Select', () => {
  it('default', () => {
    const { asFragment } = render(<Select />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('with indicatorImage props', () => {
    const { asFragment } = render(<Select indicatorImage={Indicator} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('error props', () => {
    const { asFragment } = render(<Select error />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders custom no option message', () => {
    const noInputMessage = 'type to start searching';
    const cannotFindOptionMessage = 'unable to find option';
    const { asFragment } = render(
      <Select
        noOptionsMessage={({ inputValue }) =>
          inputValue ? cannotFindOptionMessage : noInputMessage
        }
      />
    );

    userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByText(noInputMessage)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'some option');
    expect(screen.getByText(cannotFindOptionMessage)).toBeInTheDocument();
  });
});
