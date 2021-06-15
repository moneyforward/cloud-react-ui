import { Pagination, PaginationProps } from "./Pagination";

export default {
  component: Pagination,
  title: "components/Pagination",
};

export const Default = ({
  children,
  currentPage,
}: PaginationProps): JSX.Element => (
  <Pagination currentPage={2}>
    <Pagination.Prev href="#" disabled />
    <Pagination.Item href="#" label="1" />
    <Pagination.Item href="#" label="2" />
    <Pagination.Item href="#" label="3" />
    <Pagination.Next href="#" disabled />
  </Pagination>
);
