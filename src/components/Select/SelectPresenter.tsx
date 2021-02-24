import styled, { css } from "styled-components";
import ReactSelect from "react-select";
import { SelectProps } from "./SelectContainer";
import { defaultProps } from "../../theme";

export const StyledSelect = styled(ReactSelect)<SelectProps>`
  ${({ theme: { select }, isError = false }) => {
    const colorType = isError ? "error" : "default";

    return css`
      .react-select {
        &__control {
          width: ${select.width};
          height: ${select.height};
          background-color: ${select.backgroundColor[colorType]};
          border-radius: 4px;
          border-width: ${select.borderWidth};
          border-style: ${select.borderStyle};
          border-color: ${select.borderColor[colorType]};
          color: ${select.textColor};
          font-size: ${select.fontSize};
          cursor: default;
          box-shadow: none;

          &:hover {
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
            border-color: ${select.backgroundColor[colorType]};
          }

          &--is-disabled {
            cursor: not-allowed;
            pointer-events: auto; // react-selectがnoneにしてしまってcursor指定が効かなくなるのを防ぐ
            background-color: ${select.backgroundColor.disabled};
          }
        }

        &__placeholder {
          color: ${select.placeholderColor};
        }

        &__value-container {
          height: 100%;
        }

        &__menu {
          width: calc(100% - 2px);
          top: calc(100% - 3px); //controlとmenuが繋がって見えるように
          left: 1px;
          margin: 0;
          border-radius: 0 0 4px 4px;
          font-size: ${select.fontSize};
        }

        &__menu-list {
          padding: 0;
        }

        &__option {
          &--is-focused {
            color: ${select.option.textColor.focused};
            background-color: ${select.option.backgroundColor.focused};
          }
          &--is-selected {
            color: ${select.option.textColor.selected};
            background-color: ${select.option.backgroundColor.selected};
          }
          &--is-disabled {
            color: ${select.option.textColor.disabled};
          }
          &:last-child {
            border-radius: 0 0 4px 4px;
          }
        }

        &__indicator-separator {
          display: none;
        }

        &__clear-indicator {
          padding-right: 0;
          svg {
            width: 17px;
            height: 17px;
          }
          &:hover {
            color: ${select.indicator.clear.hover.color};
          }
        }

        &__dropdown-indicator {
          padding-left: 3px;
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    `;
  }}
`;
StyledSelect.defaultProps = defaultProps;

export function SelectPresenter({
  clearable = true,
  disabled = false,
  searchable = true,
  error = false,
  ...rest
}: SelectProps): React.ReactElement {
  // TODO: icon indicator
  return (
    <StyledSelect
      isClearable={clearable}
      isDisabled={disabled}
      isSearchable={searchable}
      isError={error}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}
