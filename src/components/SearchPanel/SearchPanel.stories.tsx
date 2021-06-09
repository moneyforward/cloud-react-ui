import { Story, Meta } from "@storybook/react";
import { SearchPanel } from "./SearchPanel";
import type { SearchPanelProps } from "./SearchPanel";

const Template: Story<SearchPanelProps> = (args) => <SearchPanel {...args} />;

export const Default = Template.bind({});
