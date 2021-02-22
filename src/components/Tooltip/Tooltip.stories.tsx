import { text, radios, boolean } from "@storybook/addon-knobs";
import { TooltipContainer, TooltipProps } from "./TooltipContainer";
import { Icon } from "../Icon";

export default {
  component: TooltipContainer,
  title: "components/Tooltip",
};

const placementOptions = {
  top: "top",
  topStart: "top-start",
  topEnd: "top-end",
  bottom: "bottom",
  bottomStart: "bottom-start",
  bottomEnd: "bottom-end",
};

export const Tooltip = (): React.ReactElement => (
  <div style={{ marginTop: "50px", marginLeft: "50px" }}>
    <TooltipContainer
      message={text("Message", "Tooltip")}
      placement={
        radios(
          "Placement",
          placementOptions,
          "top"
        ) as TooltipProps["placement"]
      }
      arrow={boolean("Arrow", true)}
    >
      <Icon icon="bell" />
    </TooltipContainer>
  </div>
);
