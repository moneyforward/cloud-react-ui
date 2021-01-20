import { TextPresenter } from "./TextPresenter";

export type TextProps = {
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
};

export function TextContainer(props: TextProps): React.ReactElement {
  return <TextPresenter {...props} />;
}
