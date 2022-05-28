import React from 'react';
import { TableContainer, Table, Thead } from '../../utils/styledComponent/table.styled';
import { TH, TD } from './SummarizeTable.styled';

interface Props {
  data: any;
  category: string;
}

function SummarizeTable({ category, data }: Props) {
  const totalAmount = Object.values(data).reduce(
    (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
    0
  );
  return (
    <TableContainer>
      <Table>
        <Thead>
          <tr>
            <TH width="80%">{category}</TH>
            <TH>Amount</TH>
          </tr>
        </Thead>
        <tbody>
          {Object.keys(data).map((key: string, index: number) => (
            <tr key={index}>
              <TD>{key}</TD>
              <TD>{data[key].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</TD>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TD isTopBorder textAlign="right" isBold>
              Total:
            </TD>
            <TD isTopBorder isBold>
              {String(
                Number(totalAmount)
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')
              )}
            </TD>
          </tr>
        </tfoot>
      </Table>
    </TableContainer>
  );
}

export default SummarizeTable;
