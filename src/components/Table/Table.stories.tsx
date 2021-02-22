import { radios } from "@storybook/addon-knobs";
import { TableContainer } from "./Table/TableContainer";
import { HeadContainer as Head } from "./Head/HeadContainer";
import { BodyContainer as Body } from "./Body/BodyContainer";
import { RowContainer as Row } from "./Row/RowContainer";
import { CellContainer as Cell } from "./Cell/CellContainer";
import { LeftLayout } from "../../layouts";

export default {
  component: TableContainer,
  title: "components/Table",
};

export const Table = (): React.ReactElement => {
  const border = radios(
    "border",
    { none: undefined, border: "border", rowBorder: "rowBorder" },
    undefined
  );

  const span = radios(
    "colspan/rowspan",
    { none: "none", colspan: "colspan", rowspan: "rowspan" },
    "none"
  );

  if (span === "none") {
    return (
      <LeftLayout>
        <TableContainer borderType={border}>
          <Head>
            <Row>
              <Cell>head</Cell>
              <Cell>head</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell bold={true}>body</Cell>
              <Cell>body</Cell>
            </Row>
            <Row>
              <Cell bold={true}>body</Cell>
              <Cell>body</Cell>
            </Row>
            <Row>
              <Cell bold={true}>body</Cell>
              <Cell>body</Cell>
            </Row>
          </Body>
        </TableContainer>
      </LeftLayout>
    );
  } else if (span === "colspan") {
    return (
      <LeftLayout>
        <TableContainer borderType={border}>
          <Head>
            <Row>
              <Cell colSpan={2}>head(colSpan:2)</Cell>
              <Cell>head</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell colSpan={3} bold={true}>
                body(colSpan:3)
              </Cell>
            </Row>
            <Row>
              <Cell colSpan={2} bold={true}>
                body(colSpan:2)
              </Cell>
              <Cell>body</Cell>
            </Row>
            <Row>
              <Cell bold={true}>body</Cell>
              <Cell>body</Cell>
              <Cell>body</Cell>
            </Row>
          </Body>
        </TableContainer>
      </LeftLayout>
    );
  } else {
    return (
      <LeftLayout>
        <TableContainer borderType={border}>
          <Head>
            <Row>
              <Cell>head</Cell>
              <Cell>head</Cell>
              <Cell>head</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell rowSpan={3} bold={true}>
                body(rowSpan:3)
              </Cell>
              <Cell rowSpan={2}>body(rowSpan:2)</Cell>
              <Cell>body</Cell>
            </Row>
            <Row>
              <Cell>body</Cell>
            </Row>
            <Row>
              <Cell>body</Cell>
              <Cell>body</Cell>
            </Row>
          </Body>
        </TableContainer>
      </LeftLayout>
    );
  }
};
