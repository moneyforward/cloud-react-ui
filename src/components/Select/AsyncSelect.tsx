import { forwardRef, useMemo } from "react";
import styled from "styled-components";
import AsyncReactSelect from "react-select/async";
import { components, Props as ReactSelectProps } from "react-select";
import { defaultProps } from "../../theme";
import { Styled, Option, Props as SelectProps } from "./Select";

export type Props = SelectProps & {
  defaultOptions?: Option[] | true;
  onInputChange?: (input: string) => Promise<Option[]>;
};

export const StyledAsyncSelect = styled(AsyncReactSelect)`
  ${Styled}
`;
StyledAsyncSelect.defaultProps = defaultProps;

const AsyncSelect = forwardRef<HTMLInputElement, Props>(
  (
    {
      defaultOptions,
      onInputChange,
      clearable = true,
      disabled = false,
      searchable = true,
      error = false,
      indicatorImage,
      ...rest
    },
    ref
  ) => {
    const customComponents: ReactSelectProps["components"] = {};
    if (indicatorImage) {
      customComponents["DropdownIndicator"] = useMemo(() => {
        const DropdownIndicator = (props: any) => (
          <components.DropdownIndicator {...props}>
            {indicatorImage}
          </components.DropdownIndicator>
        );
        return DropdownIndicator;
      }, [indicatorImage]);
    }

    return (
      <StyledAsyncSelect
        ref={ref}
        defaultOptions={defaultOptions}
        loadOptions={onInputChange}
        isClearable={clearable}
        isDisabled={disabled}
        isSearchable={searchable}
        isError={error}
        classNamePrefix="react-select"
        components={customComponents}
        {...rest}
      />
    );
  }
);

AsyncSelect.displayName = "AsyncSelect";

export { AsyncSelect };
