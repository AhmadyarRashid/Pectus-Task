import React from 'react';
import { TableContainer, Table, Thead } from '../../utils/styledComponent/table.styled';

interface Props {
  data: string[];
  category: string;
}

function SummarizeTable({ category, data }: Props) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <tr>
            <th>{category}</th>
            <th>Amount</th>
          </tr>
        </Thead>
        <tbody>
          <tr>
            <td>IT</td>
            <td>12,000</td>
          </tr>
          <tr>
            <td>Sales</td>
            <td>22,000</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default SummarizeTable;
