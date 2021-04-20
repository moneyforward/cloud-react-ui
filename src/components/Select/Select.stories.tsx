import { useState } from "react";
import { Select as SelectComponent, Option, GroupOption } from "./Select";
import { AsyncSelect as AsyncSelectComponent } from "./AsyncSelect";
import { boolean, text } from "@storybook/addon-knobs";

export default {
  component: SelectComponent,
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
  {
    value: "3",
    label: "label3",
  },
  {
    value: "4",
    label: "label4",
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

const Indicator = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z"
      fill="#7C8291"
    />
  </svg>
);

export const Select = (): JSX.Element => {
  const [selected, setSelected] = useState<Option>();
  const isGroupOption = boolean("GroupOption", false);

  return (
    <SelectComponent
      instanceId="select"
      options={isGroupOption ? groupOptions : defaultOptions}
      value={selected}
      defaultValue={
        isGroupOption ? groupOptions[0].options[0] : defaultOptions[0]
      }
      placeholder={text("Placeholder", "")}
      onChange={(option) => setSelected(option)}
      clearable={boolean("Clearable", true)}
      disabled={boolean("Disabled", false)}
      searchable={boolean("Searchable", true)}
      error={boolean("Error", false)}
      indicatorImage={boolean("customIndicator", false) ? Indicator : undefined}
    />
  );
};

export const AsyncSelect = (): JSX.Element => {
  const [selected, setSelected] = useState<Option>();

  const handleInputChange = async (inputValue: string) => {
    return new Promise<Option[]>((resolve) => {
      setTimeout(
        () =>
          resolve(
            defaultOptions.filter((option) =>
              option.label.toLowerCase().includes(inputValue.toLowerCase())
            )
          ),
        1000
      );
    });
  };

  return (
    <AsyncSelectComponent
      defaultOptions
      value={selected}
      onChange={(option) => setSelected(option)}
      onInputChange={handleInputChange}
    />
  );
};
