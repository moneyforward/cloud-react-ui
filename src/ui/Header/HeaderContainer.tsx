import { HeaderPresenter } from "./HeaderPresenter";

export type HeaderProps = {
  fixed?: boolean;
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
};

export function HeaderContainer(props: HeaderProps): React.ReactElement {
  return <HeaderPresenter {...props} />;
}
