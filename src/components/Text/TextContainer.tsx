import { TextPresenter } from "./TextPresenter";
import { theme } from "../../theme";

type Size = keyof typeof theme.text.size;
type Color = keyof typeof theme.text.color;

export type TextProps = {
  tag?: keyof JSX.IntrinsicElements;
  size?: Size;
  color?: Color;
  className?: string;
  align?: "center" | "left" | "right" | "start" | "end";
};

export const TextContainer: React.FC<TextProps> = (props) => {
  return <TextPresenter {...props} />;
};
