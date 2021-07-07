import { Pagination, PaginationProps } from "./Pagination";

export default {
  component: Pagination,
  title: "components/Pagination",
};

export const Default = (): JSX.Element => {
  const pages = [1, 2, 3, 4, 5];
  const current = 0;
  const hasPrev = (current: number) => false;
  const hasNext = (current: number) => true;

  /* 
    next/linkを利用する場合、以下ののコンポーネントではNextLinkでラップして利用する必要があります。
    [Pagination.Prev, Pagination.Link, Pagination.Next]

    例:
    <NextLink href="/xxx" passHref>
      <Pagination.Link current>1</Pagination.Link>
    </NextLink>
  */
  return (
    <Pagination>
      <Pagination.Item>
        <Pagination.Prev href="#" disabled={!hasPrev(current)} />
      </Pagination.Item>

      {pages.map((value, i) => (
        <Pagination.Item key={i}>
          <Pagination.Link href="#" current={current === i || undefined}>
            {i + 1}
          </Pagination.Link>
        </Pagination.Item>
      ))}

      <Pagination.Item>
        <Pagination.Next href="#" disabled={!hasNext(current)} />
      </Pagination.Item>
    </Pagination>
  );
};

export const OnClickProps = (): JSX.Element => {
  const pages = [1, 2, 3, 4, 5];
  const current = 0;
  const hasPrev = (current: number) => false;
  const hasNext = (current: number) => true;

  return (
    <Pagination>
      <Pagination.Item onClick={() => console.log("prev")}>
        <Pagination.Prev disabled={!hasPrev(current)} />
      </Pagination.Item>

      {pages.map((value, i) => (
        <Pagination.Item key={i} onClick={() => console.log(`page${value}`)}>
          <Pagination.Link current={current === i || undefined}>
            {value}
          </Pagination.Link>
        </Pagination.Item>
      ))}

      <Pagination.Item onClick={() => console.log("next")}>
        <Pagination.Next disabled={!hasNext(current)} />
      </Pagination.Item>
    </Pagination>
  );
};
