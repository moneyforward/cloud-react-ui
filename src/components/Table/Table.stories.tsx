import { Story, Meta } from "@storybook/react";
import {
  TableContainer as Table,
  TableProps as Props,
} from "./Table/TableContainer";
import { HeadContainer as Head } from "./Head/HeadContainer";
import { BodyContainer as Body } from "./Body/BodyContainer";
import { RowContainer as Row } from "./Row/RowContainer";
import { CellContainer as Cell } from "./Cell/CellContainer";

export default {
  component: Table,
  title: "components/Table",
} as Meta;

const Template: Story<Props> = ({ borderType }) => (
  <Table borderType={borderType}>
    <Head>
      <Row>
        <Cell>head</Cell>
        <Cell colSpan={2}>head(colspan=2)</Cell>
      </Row>
    </Head>
    <Body>
      <Row>
        <Cell bold colSpan={3}>
          body(colspan=3)
        </Cell>
      </Row>
      <Row>
        <Cell bold rowSpan={3}>
          body(rowspan=3)
        </Cell>
        <Cell colSpan={2}>body</Cell>
      </Row>
      <Row>
        <Cell bold>body</Cell>
        <Cell>body</Cell>
      </Row>
      <Row>
        <Cell bold>body</Cell>
        <Cell>body</Cell>
      </Row>
    </Body>
  </Table>
);

export const Default = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = { borderType: "border" };

export const RowBordered = Template.bind({});
RowBordered.args = { borderType: "rowBorder" };
