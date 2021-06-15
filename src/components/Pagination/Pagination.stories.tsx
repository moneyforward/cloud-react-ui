import { Pagination } from './Pagination';

export default {
  component: Pagination,
  title: 'ui/Pagination',
};

export const Default = (): JSX.Element => (
  <Pagination>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
  </Pagination>
);
