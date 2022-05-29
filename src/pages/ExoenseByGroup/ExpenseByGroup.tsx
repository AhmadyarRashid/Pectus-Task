import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import SummarizeTable from '../../components/SummarizeTable/SummarizeTable';
import { Container, StyleLink } from '../../utils/styledComponent/common.styled';
import { HeaderWrapper } from './ExoenseByGroup.styled';
import { IExpense } from '../../types/expense';
import expenseData from '../../constant/data.json';
import { expenseCategory } from '../../constant/constants';

function ExpenseByGroup() {
  const [selectedGroup, setGroup] = useState({
    title: 'Departments',
    key: 'departments'
  });

  const { key } = selectedGroup;
  const data = expenseData.reduce(
    (expenseSummary: any, { departments, amount, projectName, date, memberName }: IExpense) => {
      // Firstly decide on which category we implement group by functionality
      let groupedBy;
      if (key === expenseCategory.projectName) {
        groupedBy = projectName;
      } else if (key === expenseCategory.date) {
        groupedBy = date;
      } else if (key === expenseCategory.memberName) {
        groupedBy = memberName;
      } else {
        groupedBy = departments;
      }
      // remove current icon and commas from amount
      const amountInNumberWithPoints = amount.slice(0, amount.length - 1).replace(/,/g, '');
      // remove extra zero after point
      const actualAmount = Number(
        amountInNumberWithPoints.slice(0, amountInNumberWithPoints.indexOf('.'))
      );
      // handle scenario first time initial amount must be zero 0
      if (!expenseSummary[groupedBy]) expenseSummary[groupedBy] = 0;
      // Sum all amounts against category groups
      expenseSummary[groupedBy] += actualAmount;
      return expenseSummary;
    },
    {}
  );
  return (
    <Container>
      <p>
        Click here for&nbsp;&nbsp;
        <StyleLink to="/">Home Page</StyleLink>
      </p>
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
