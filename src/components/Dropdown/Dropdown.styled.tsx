import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 40%;
`;

export const DropdownLabel = styled.label`
  font-size: 24px;
  line-height: 29.05px;
  font-weight: 400;
  margin-right: 12px;
`;

export const DropdownSelect = styled.select`
  padding: 8px;
  width: 45%;
  background-color: #c4c4c4;
  cursor: pointer;
`;

export const DropdownOption = styled.option`
  font-size: 24px;
  line-height: 29.05px;
  font-weight: 400;
`;
