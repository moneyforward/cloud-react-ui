import styled from "styled-components";
import { FooterContainer } from "./FooterContainer";
import { Link, Text } from "@components";

export default {
  component: FooterContainer,
  title: "ui/Footer",
};

const StyledText = styled(Text)`
  margin-right: 32px;
  letter-spacing: 0.4px;
`;

export const Footer = (): React.ReactElement => {
  return (
    <FooterContainer>
      <StyledText size="small">
        <Link href="#">利用規約</Link>
      </StyledText>

      <StyledText size="small">
        <Link href="#">個人情報保護方針</Link>
      </StyledText>

      <StyledText size="small">&copy; Money Forward, Inc.</StyledText>
    </FooterContainer>
  );
};
