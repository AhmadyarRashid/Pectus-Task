import React, { useState, useMemo } from 'react';
import { TableContainer, Table, Thead, TH, TD } from './SortableTable.styled';
import { IExpense } from '../../types/expense';

interface HeaderProps {
  title: string;
  key: string;
}

interface Props {
  data: IExpense[];
  header: HeaderProps[];
}

const useSortableData = (items: any, config = { key: '', direction: '' }) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      const { key, direction } = sortConfig;
      sortableItems.sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === 'ascending' ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

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
