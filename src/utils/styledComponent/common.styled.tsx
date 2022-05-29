import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyleLink = styled(Link)`
  margin-top: 4%;
  font-size: 24px;
`;
