import { HeaderPresenter } from "./HeaderPresenter";

export type HeaderProps = {
  fixed?: boolean;
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
};

export const HeaderContainer: React.FC<HeaderProps> = (props) => {
  return <HeaderPresenter {...props} />;
};
