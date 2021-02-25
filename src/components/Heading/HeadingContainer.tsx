import { HeadingPresenter } from "./HeadingPresenter";
import { theme } from "../../theme";

type Size = keyof typeof theme.heading.fontSize;
type Weight = keyof typeof theme.heading.fontWeight;
type Color = keyof typeof theme.heading.color;

export type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: Size;
  weight?: Weight;
  color?: Color;
  className?: string;
};

export const HeadingContainer: React.FC<HeadingProps> = ({
  level,
  ...rest
}) => {
  return <HeadingPresenter tag={`h${level}`} {...rest} />;
};
