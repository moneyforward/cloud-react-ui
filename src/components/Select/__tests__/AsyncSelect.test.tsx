import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AsyncSelect } from '../AsyncSelect';
import { Option } from '../Select';

describe('AsyncSelect', () => {
  it('default', () => {
    const { asFragment } = render(<AsyncSelect />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('called onInputChange', async () => {
    const changed = jest.fn();
    const options: Option[] = [
      { value: 'test1', label: 'test1' },
      { value: 'test2', label: 'test2' },
    ];
    const handleInputChange = async (inputValue: string) =>
      new Promise<Option[]>((resolve) => {
        setTimeout(
          () =>
            resolve(
              options.filter((option) => {
                changed();
                return option.label
                  .toLowerCase()
                  .includes(inputValue.toLowerCase());
              })
            ),
          1000
        );
      });

    render(<AsyncSelect options={options} onInputChange={handleInputChange} />);
    userEvent.type(screen.getByRole('textbox'), 'test1');

    await waitFor(() => expect(changed).toBeCalled());
  });

  it('renders custom no option message', () => {
    const noInputMessage = 'type to start searching';
    const cannotFindOptionMessage = 'unable to find option';
    const { asFragment } = render(
      <AsyncSelect
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

  it('renders custom loading message', async () => {
    const changed = jest.fn();
    const options: Option[] = [
      { value: 'test1', label: 'test1' },
      { value: 'test2', label: 'test2' },
    ];
    const handleInputChange = async (inputValue: string) =>
      new Promise<Option[]>((resolve) => {
        setTimeout(
          () =>
            resolve(
              options.filter((option) => {
                changed();
                return option.label
                  .toLowerCase()
                  .includes(inputValue.toLowerCase());
              })
            ),
          1000
        );
      });
    const customLoadingMessage = 'custom loading message';

    render(
      <AsyncSelect
        options={options}
        onInputChange={handleInputChange}
        loadingMessage={() => customLoadingMessage}
      />
    );
    userEvent.type(screen.getByRole('textbox'), 'test1');

    expect(screen.getByText(customLoadingMessage)).toBeInTheDocument();
    await waitFor(() => expect(changed).toBeCalled());
  });
});
