import styled from "styled-components";
import { defaultProps } from "@theme";

export type LeftLayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  width: ${(props) => props.theme.leftLayout.width};
  margin: ${(props) => props.theme.leftLayout.margin};
`;
Wrapper.defaultProps = defaultProps;

export function LeftLayout({ children }: LeftLayoutProps): React.ReactElement {
  return <Wrapper>{children}</Wrapper>;
}
