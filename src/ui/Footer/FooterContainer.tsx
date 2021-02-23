import { FooterPresenter } from "./FooterPresenter";

export type FooterProps = {
  fixed?: boolean;
  children: React.ReactNode;
};

export function FooterContainer(props: FooterProps): React.ReactElement {
  return <FooterPresenter {...props} />;
}
