import { text, radios } from "@storybook/addon-knobs";
import {
  ProgressLabelContainer,
  ProgressLabelProps,
} from "./ProgressLabelContainer";

export default {
  component: ProgressLabelContainer,
  title: "components/Progress Label",
};

const statusOption = {
  waiting: "waiting",
  inProgress: "inProgress",
  completed: "completed",
};

export const ProgressLabel: React.FC = () => (
  <ProgressLabelContainer
    status={
      radios(
        "Status",
        statusOption,
        "inProgress"
      ) as ProgressLabelProps["status"]
    }
  >
    {text("Text", "ステップ1")}
  </ProgressLabelContainer>
);
