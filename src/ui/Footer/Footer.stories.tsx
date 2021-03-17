import styled from "styled-components";
import { boolean } from "@storybook/addon-knobs";
import { Footer as FooterComponent } from "./Footer";
import { Link, Text } from "../../components";

export default {
  component: FooterComponent,
  title: "ui/Footer",
};

const StyledText = styled(Text)`
  margin-right: 32px;
  letter-spacing: 0.4px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterComponent fixed={boolean("fixed", false)}>
      <StyledText size="small">
        <Link href="#">利用規約</Link>
      </StyledText>

      <StyledText size="small">
        <Link href="#">個人情報保護方針</Link>
      </StyledText>

      <StyledText size="small">&copy; Money Forward, Inc.</StyledText>
    </FooterComponent>
  );
};
