import { Pagination, PaginationProps } from "./Pagination";

export default {
  component: Pagination,
  title: "components/Pagination",
};

export const Default = ({
  children,
  currentPage,
}: PaginationProps): JSX.Element => (
  <Pagination>
    <Pagination.Prev href="#" disabled />
    <Pagination.Item href="#" page={1} current />
    <Pagination.Item href="#" page={2} />
    <Pagination.Item href="#" page={3} />
    <Pagination.Next href="#" disabled />
  </Pagination>
);
