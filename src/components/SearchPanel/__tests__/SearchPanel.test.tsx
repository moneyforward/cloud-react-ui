import { render, fireEvent, screen } from '@testing-library/react';
import { SearchPanel } from '../SearchPanel';
import { Button } from '../../../components';

describe('SearchPanel', () => {
  it('default', () => {
    const { asFragment } = render(
      <SearchPanel>
        <form>
          <SearchPanel.Filters>
            <SearchPanel.Row>
              <SearchPanel.Column>
                <div>Content</div>
              </SearchPanel.Column>
            </SearchPanel.Row>
          </SearchPanel.Filters>
          <SearchPanel.Actions>
            <SearchPanel.ButtonGroup>
              <Button color="settings">クリア</Button>
              <Button color="primary">検索</Button>
            </SearchPanel.ButtonGroup>
          </SearchPanel.Actions>
        </form>
      </SearchPanel>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Content')).not.toBeVisible();
  });

  it("should be open when 'defaultOpen' has true", () => {
    render(<SearchPanel defaultOpen={true}>Content</SearchPanel>);
    expect(screen.getByText('Content')).toBeVisible();
  });

  it('onClick Toggle', () => {
    render(<SearchPanel>Content</SearchPanel>);
    const button = screen.getByRole('button', { expanded: false });

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.queryByText('Content')).toBeVisible();

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('Content')).not.toBeVisible();
  });
});
