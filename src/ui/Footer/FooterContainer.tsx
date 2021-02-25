import { FooterPresenter } from "./FooterPresenter";

export type FooterProps = {
  fixed?: boolean;
};

export const FooterContainer: React.FC<FooterProps> = (props) => {
  return <FooterPresenter {...props} />;
};
