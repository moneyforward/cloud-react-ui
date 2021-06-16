import { Pagination, PaginationProps } from "./Pagination";
import { Icon } from "../../components";

export default {
  component: Pagination,
  title: "components/Pagination",
};

export const Default = ({
  children,
  currentPage,
}: PaginationProps): JSX.Element => (
  <Pagination>
    <Pagination.Prev>
      <Pagination.Link href="#" disabled>
        <Icon icon="chevronUp" rotation={270} />
      </Pagination.Link>
    </Pagination.Prev>

    <Pagination.Item>
      <Pagination.Link href="#" current>
        1
      </Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#">2</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#">3</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#">4</Pagination.Link>
    </Pagination.Item>

    <Pagination.Next href="#" disabled>
      <Pagination.Link href="#" disabled>
        <Icon icon="chevronUp" rotation={90} />
      </Pagination.Link>
    </Pagination.Next>
  </Pagination>
);
