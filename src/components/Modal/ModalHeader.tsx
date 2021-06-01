import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultProps } from "../../theme";
import { IconButton as MuiIconButton } from "@material-ui/core";

export type ModalHeaderProps = {
  handleClose?: VoidFunction;
  children?: React.ReactNode;
  className?: string;
};

const StyledModalHeader = styled.div`
  ${({ theme: { modal } }) => css`
    display: ${modal.header.display};
    align-items: ${modal.header.alignItems};
    justify-content: ${modal.header.justifyContent};
    background: ${modal.header.background};
    padding: ${modal.header.padding};
    min-height: ${modal.header.minHeight};
    font-size: ${modal.header.fontSize};
    font-weight: ${modal.header.fontWeight};
    word-break: ${modal.header.wordBreak};
  `}
`;
StyledModalHeader.defaultProps = defaultProps;

const CloseButton = styled(MuiIconButton)`
  ${({ theme: { modal } }) => css`
    && {
      flex: ${modal.header.button.flex};
    }
  `}
`;
CloseButton.defaultProps = defaultProps;

const CloseIcon = styled(({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>close</title>
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="#7C8291"
    />
  </svg>
))`
  ${({ theme: { modal } }) => css`
    width: ${modal.header.button.icon.width};
    height: ${modal.header.button.icon.height};

    & > path {
      fill: ${modal.header.button.icon.color};
    }
  `}
`;
CloseIcon.defaultProps = defaultProps;

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, handleClose, ...rest }, ref) => (
    <StyledModalHeader ref={ref} {...rest}>
      {children}
      <CloseButton size="small" onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
    </StyledModalHeader>
  )
);

ModalHeader.displayName = "Modal.Header";

export { ModalHeader }
