import { FooterPresenter } from "./FooterPresenter";

export type FooterProps = {
  children: React.ReactNode;
};

export function FooterContainer(props: FooterProps): React.ReactElement {
  return <FooterPresenter {...props} />;
}
