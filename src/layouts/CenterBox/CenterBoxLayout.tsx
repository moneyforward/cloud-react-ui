import styled from "styled-components";
import { color } from "../../theme";
import { Box } from "../../components";

export type CenterBoxLayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.whisper};
`;

export function CenterBoxLayout({
  children,
}: CenterBoxLayoutProps): React.ReactElement {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  );
}
