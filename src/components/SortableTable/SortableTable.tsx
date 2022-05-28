import React from 'react';
import useSortableData from '../../customHooks/useSortableData';
import { TableContainer, Table, Thead } from '../../utils/styledComponent/table.styled';
import { TH, TD } from './SortableTable.styled';
import { IExpense } from '../../types/expense';

interface HeaderProps {
  title: string;
  key: string;
}

interface Props {
  data: IExpense[];
  header: HeaderProps[];
}

function SortableTable({ header, data }: Props) {
  const { items, requestSort } = useSortableData(data);
  return (
    <TableContainer>
      <Table>
        <Thead>
          <tr>
            {header.map((data: HeaderProps, index: number) => (
              <TH key={index} onClick={() => requestSort(data.key)}>
                {data.title}
              </TH>
            ))}
          </tr>
        </Thead>
        <tbody>
          {items.map((item: IExpense, index: number) => (
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
