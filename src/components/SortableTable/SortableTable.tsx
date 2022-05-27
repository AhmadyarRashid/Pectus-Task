import React from 'react';
import { TableContainer, Table, Thead, TH, TD } from './SortableTable.styled';
import { IExpense } from '../../types/expense';

interface Props {
  data: IExpense[];
  header: string[];
}

function SortableTable({ header, data }: Props) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          {header.map((title: string, index: number) => (
            <TH key={index}>{title}</TH>
          ))}
        </Thead>
        <tbody>
          {data.map((item: IExpense, index: number) => (
            <tr key={index}>
              <TD>{item.departments}</TD>
              <TD>{item.projectName}</TD>
              <TD>{item.amount}</TD>
              <TD>{item.date}</TD>
              <TD>{item.memberName}</TD>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default SortableTable;
