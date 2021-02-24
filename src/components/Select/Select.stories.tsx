import { useState } from "react";
import { SelectContainer, Option, GroupOption } from "./SelectContainer";
import { boolean, text } from "@storybook/addon-knobs";

export default {
  component: SelectContainer,
  title: "components/Select",
};

const defaultOptions: Option[] = [
  {
    value: "1",
    label: "label1",
  },
  {
    value: "2",
    label: "label2",
  },
];

const groupOptions: GroupOption[] = [
  {
    label: "parent1",
    options: [
      {
        label: "child1",
        value: "child1",
      },
      {
        label: "child2",
        value: "child2",
      },
    ],
  },
  {
    label: "parent2",
    options: [
      {
        label: "child3",
        value: "child3",
      },
      {
        label: "child4",
        value: "child4",
      },
    ],
  },
];

export const Select: React.FC = () => {
  const [selected, setSelected] = useState<Option | GroupOption>();

  return (
    <SelectContainer
      options={boolean("GroupOption", false) ? groupOptions : defaultOptions}
      value={selected}
      placeholder={text("Placeholder", "")}
      onChange={(option) => setSelected(option)}
      clearable={boolean("Clearable", true)}
      disabled={boolean("Disabled", false)}
      searchable={boolean("Searchable", true)}
      error={boolean("Error", false)}
    />
  );
};
