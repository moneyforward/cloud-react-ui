import { forwardRef, useContext } from "react";
import styled, {css} from "styled-components";
import { defaultProps } from "../../theme";
import { StepsModeContext } from "./Steps"

export type Props = {
  step: number;
  stepStatus: 'waiting' | 'inProgress' | 'completed';
  title: string;
  className?: string;
}

const StepWrapper = styled.div`
  ${( {theme: { steps } } ) => css`
    position: ${steps.step.position};
  `}
`;
StepWrapper.defaultProps = defaultProps

const Title = styled.span<{ stepStatus: Props['stepStatus'] }>`
  ${( {theme: { steps }, stepStatus } ) => css`
    color: ${steps.step.title.color[stepStatus]};
    position: ${steps.step.title.position};
    top: ${steps.step.title.top};
    left: ${steps.step.title.left};
    transform: ${steps.step.title.transform};
    min-width: ${steps.step.title.minWidth};
    text-align: ${steps.step.title.textAlign};
    font-size: ${steps.step.title.fontSize};
    font-weight: ${steps.step.title.fontWeight};
  `}
`;
Title.defaultProps = defaultProps

const Circle = styled.div<{ stepStatus: Props['stepStatus'] }>`
  ${( {theme: { steps }, stepStatus } ) => css`
    margin-top: ${steps.step.circle.marginTop};
    width: ${steps.step.circle.width};
    height: ${steps.step.circle.height};
    border-radius: ${steps.step.circle.borderRadius};
    display: ${steps.step.circle.display};
    align-items: ${steps.step.circle.alignItems};
    justify-content: ${steps.step.circle.justifyContent};
    background-color: ${steps.step.circle.backgroundColor[stepStatus]};
    border-style: ${steps.step.circle.borderStyle};
    border-width: ${steps.step.circle.borderWidth};
    border-color: ${steps.step.circle.borderColor[stepStatus]};
    color: ${steps.step.circle.color[stepStatus]};
    line-height: ${steps.step.circle.lineHeight};
  `}
`;
Circle.defaultProps = defaultProps

const Count = styled.span`
  ${( {theme: { steps } } ) => css`
    position: ${steps.step.circle.count.position};
    top: ${steps.step.circle.count.top};
  `}
`;
Count.defaultProps = defaultProps

const Check = styled(({ className }) => (
  <svg
    viewBox="0 0 18 14"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={className}
    >
    <title>check</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.9999 11.2L1.7999 6.99998L0.399902 8.39998L5.9999 14L17.9999 1.99998L16.5999 0.599976L5.9999 11.2Z"
    />
  </svg>
))`
  ${({ theme: { steps } }) => css`
    width: ${steps.step.check.width};
    height: ${steps.step.check.height};

    & > path {
      fill: ${steps.step.check.color};
    }
  `}
`;
Check.defaultProps = defaultProps

const Step = forwardRef<HTMLDivElement, Props>(
  ({step, title, className, stepStatus}, ref) => {
    const { mode } = useContext(StepsModeContext);

    return(
      <StepWrapper ref={ref} className={className}>
        <Title stepStatus={stepStatus}>
          {title}
        </Title>
        
        <Circle stepStatus={stepStatus}>
          { mode === "check" && stepStatus === 'completed' ? (
            <Check />
          ) : (
            <Count>
              { step }
            </Count>
          )}
        </Circle>
      </StepWrapper>
    )
  }
);

Step.displayName = "Step"

export { Step };
