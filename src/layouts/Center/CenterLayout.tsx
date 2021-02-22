import styled from "styled-components";
import { defaultProps } from "../../theme";

export type CenterLayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  width: ${(props) => props.theme.centerLayout.width};
  margin-left: auto;
  margin-right: auto;
`;
Wrapper.defaultProps = defaultProps;

export function CenterLayout({
  children,
}: CenterLayoutProps): React.ReactElement {
  return <Wrapper>{children}</Wrapper>;
}
