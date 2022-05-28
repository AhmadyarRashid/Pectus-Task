import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import SummarizeTable from '../../components/SummarizeTable/SummarizeTable';
import { Container } from '../../utils/styledComponent/common.styled';
import { HeaderWrapper } from './ExoenseByGroup.styled';
import expenseData from '../../constant/data.json';
import { IExpense } from '../../types/expense';

function ExpenseByGroup() {
  const [selectedGroup, setGroup] = useState({
    title: 'Departments',
    key: 'departments'
  });

  const { key } = selectedGroup;
  const data = expenseData.reduce(
    (expenseSummary: any, { departments, amount, projectName, date, memberName }: IExpense) => {
      let groupedBy;
      if (key === 'projectName') {
        groupedBy = projectName;
      } else if (key === 'date') {
        groupedBy = date;
      } else if (key === 'memberName') {
        groupedBy = memberName;
      } else {
        groupedBy = departments;
      }
      const amountInNumberWithPoints = amount.slice(0, amount.length - 1).replace(/,/g, '');
      const actualAmount = Number(
        amountInNumberWithPoints.slice(0, amountInNumberWithPoints.indexOf('.'))
      );
      if (!expenseSummary[groupedBy]) expenseSummary[groupedBy] = 0;
      expenseSummary[groupedBy] += actualAmount;
      return expenseSummary;
    },
    {}
  );
  return (
    <Container>
      <HeaderWrapper>
        <Dropdown
          onChange={setGroup}
          label="Total Expanses by:"
          options={[
            { title: 'Departments', key: 'departments' },
            { title: 'Project Name', key: 'projectName' },
            { title: 'Date', key: 'date' },
            { title: 'Name', key: 'memberName' }
          ]}
        />
      </HeaderWrapper>
      <SummarizeTable category={selectedGroup.title} data={data} />
    </Container>
  );
}

export default ExpenseByGroup;
