import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import SummarizeTable from '../../components/SummarizeTable/SummarizeTable';
import { Container } from '../../utils/styledComponent/common.styled';
import { HeaderWrapper } from './ExoenseByGroup.styled';

function ExpenseByGroup() {
  const [selectedGroup, setGroup] = useState({
    title: 'Departments',
    key: 'departments'
  });
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
      <SummarizeTable category={selectedGroup.title} data={[]} />
    </Container>
  );
}

export default ExpenseByGroup;
