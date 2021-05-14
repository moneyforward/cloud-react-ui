import { forwardRef } from "react";
import styled, {css} from "styled-components";
import { defaultProps } from "../../theme";

export type Props = {
  step: number;
  stepStatus: 'waiting' | 'inProgress' | 'completed';
  title: string;
  useCheck: boolean;
  className?: string;
}

const StepWrapper = styled.div`
  ${( {theme: { steps } } ) => css`
    position: relative;
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
  ${( {theme: { steps }, stepStatus } ) => {
    return css`
      margin-top: ${steps.step.marginTop};
      width: ${steps.step.width};
      height: ${steps.step.height};
      border-radius: ${steps.step.borderRadius};
      display: ${steps.step.display};
      align-items: ${steps.step.alignItems};
      justify-content: ${steps.step.justifyContent};
      background-color: ${steps.step.backgroundColor[stepStatus]};
      border-style: ${steps.step.borderStyle};
      border-width: ${steps.step.borderWidth};
      border-color: ${steps.step.borderColor[stepStatus]};
      color: ${steps.step.color[stepStatus]};
      line-height: ${steps.step.lineHeight};
    `
  }}
`;
Circle.defaultProps = defaultProps

const Step = forwardRef<HTMLDivElement, Props>(
  ({step, title, useCheck,  className, ...rest}, ref) => (
    <StepWrapper className={className}>
      <Title {...rest}>
        {title}
      </Title>
      { useCheck }
      <Circle ref={ref} {...rest}>
        {step}
      </Circle>
    </StepWrapper>
  )
);

Step.displayName = "Step"

export { Step };
