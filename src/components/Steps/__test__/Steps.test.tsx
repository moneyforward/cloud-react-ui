import { Steps } from "../Steps";
import { Step } from "../Step";
import { StepTie } from "../StepTie";
import { render, screen } from "@testing-library/react";

describe("ui/Steps", () => {
  it("renders of check mode", () => {
    const { asFragment } = render(
      <Steps>
        <Step step={1} stepStatus="completed" title="Step 1" />
        <StepTie completed />
        <Step step={2} stepStatus="inProgress" title="Step 2" />
        <StepTie />
        <Step step={3} stepStatus="waiting" title="Step 3" />
      </Steps>
    );
    expect(screen.getByTitle('check')).toBeInTheDocument();
    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders of number mode", () => {
    const { asFragment } = render(
      <Steps mode="number">
        <Step step={1} stepStatus="completed" title="Step 1" />
        <StepTie completed />
        <Step step={2} stepStatus="inProgress" title="Step 2" />
        <StepTie />
        <Step step={3} stepStatus="waiting" title="Step 3" />
      </Steps>
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
