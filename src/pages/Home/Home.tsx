import React from 'react';
import data from '../../constant/data.json';
import SortableTable from '../../components/SortableTable/SortableTable';
import { Container } from './Home.styled';

function HomePage() {
  return (
    <Container>
      <SortableTable
        header={['Departments', 'Project Name', 'Amount', 'Date', 'Name']}
        data={data}
      />
    </Container>
  );
}

export default HomePage;
