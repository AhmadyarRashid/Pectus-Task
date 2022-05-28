import styled from 'styled-components';

interface ThProps {
  width?: string;
}

interface TdProps {
  width?: string;
  isTopBorder?: boolean;
  textAlign?: string;
  isBold?: boolean;
}

export const TH = styled.th<ThProps>`
  width: ${({ width = '20%' }) => width};
  font-weight: 400;
  text-align: left;
  font-size: 24px;
  line-height: 29.05px;
  border-bottom: 1px solid black;
  padding: 4px;
  cursor: pointer;
`;

export const TD = styled.td<TdProps>`
  width: ${({ width = '20%' }) => width};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  font-weight: ${({ isBold = false }) => (isBold ? 'bold' : 'normal')};
  margin-right: 6%;
  font-size: 16px;
  line-height: 19.36px;
  padding: 10px;
  border-top: ${({ isTopBorder = false }) => (isTopBorder ? '1px solid black' : 'none')};
`;
