import { text, boolean } from "@storybook/addon-knobs";
import { LinkContainer } from "./LinkContainer";

export default {
  component: LinkContainer,
  title: "Link",
};

export const Link = (): React.ReactElement => (
  <LinkContainer
    href="#"
    target="_self"
    disabled={boolean("disabled?", false)}
    isEnabledOnlyOnceClick={boolean("isEnabledOnlyOnceClick?", false)}
    remoteModal={boolean("remoteModal?(for Rails)", false)}
    method={boolean("method(for Rails)", false) ? "post" : undefined}
  >
    {text("Text", "Link")}
  </LinkContainer>
);
