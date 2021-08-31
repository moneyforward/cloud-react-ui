import { Story, Meta } from '@storybook/react';
import { Select, Props, Option } from './Select';
import { AsyncSelect, Props as AsyncProps } from './AsyncSelect';

export default {
  component: Select,
  title: 'components/Select',
} as Meta;

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

const Template: Story<Props> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      value: '1',
      label: 'label1',
    },
    {
      value: '2',
      label: 'label2',
    },
  ],
};

export const GroupOption = Template.bind({});
GroupOption.args = {
  options: [
    {
      label: 'parent1',
      options: [
        {
          label: 'child1',
          value: 'child1',
        },
        {
          label: 'child2',
          value: 'child2',
        },
      ],
    },
    {
      label: 'parent2',
      options: [
        {
          label: 'child3',
          value: 'child3',
        },
        {
          label: 'child4',
          value: 'child4',
        },
      ],
    },
  ],
};

export const CustomIndicator = Template.bind({});
CustomIndicator.args = {
  options: Default.args?.options as Option[],
  indicatorImage: Indicator,
};

const AsyncTemplate: Story<AsyncProps> = (args) => <AsyncSelect {...args} />;

export const Async = AsyncTemplate.bind({});
Async.args = {
  defaultOptions: Default.args?.options as Option[],
  onInputChange: async (inputValue: string) =>
    new Promise<Option[]>((resolve) => {
      setTimeout(
        () =>
          resolve(
            (Default.args?.options as Option[]).filter((option) =>
              option.label.toLowerCase().includes(inputValue.toLowerCase())
            )
          ),
        1000
      );
    }),
};
