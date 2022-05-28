import { useMemo, useState } from 'react';

interface configProps {
  key: string;
  direction: string;
}

/*
  we assign 'items' type 'any' because in sort filter.
  we manage it dynamically using 'key' so if we assign IExpense[] type then its throw error
  on a[key] because it's not recognised that key is not exists in IExpense interface
 */
const useSortableData = (items: any, config: configProps = { key: '', direction: '' }) => {
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

export default useSortableData;
