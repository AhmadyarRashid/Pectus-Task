import React from 'react';
import SortableTable from '../../components/SortableTable/SortableTable';
import { Container } from '../../utils/styledComponent/common.styled';
import data from '../../constant/data.json';

function HomePage() {
  return (
    <Container>
      <SortableTable
        header={[
          { title: 'Departments', key: 'departments' },
          { title: 'Project Name', key: 'projectName' },
          { title: 'Amount', key: 'amount' },
          { title: 'Date', key: 'date' },
          { title: 'Name', key: 'memberName' }
        ]}
        data={data}
      />
    </Container>
  );
}

export default HomePage;
