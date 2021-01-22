import { TextPresenter } from "./TextPresenter";
import { theme } from "../../theme";

type Size = keyof typeof theme.media.text.size;
type Color = keyof typeof theme.media.text.color;

export type TextProps = {
  tag?: keyof JSX.IntrinsicElements;
  size?: Size;
  color?: Color;
  children: React.ReactNode;
  className?: string;
};

export function TextContainer(props: TextProps): React.ReactElement {
  return <TextPresenter {...props} />;
}
