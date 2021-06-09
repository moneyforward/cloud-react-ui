import styled, { css } from "styled-components";

const StyledSearchPanel = styled.div``;

export type SearchPanelProps = {
  children?: React.ReactNode;
};

export const SearchPanel = ({ children }: SearchPanelProps) => (
  <StyledSearchPanel>{children}</StyledSearchPanel>
);
