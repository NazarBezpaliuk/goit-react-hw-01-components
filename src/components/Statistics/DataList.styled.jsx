import styled from '@emotion/styled';
import RandomColor from './RandomColor';

export const StatsList = styled.ul`
  justify-content: center;
  display: flex;
  padding: 0;
  margin: 0 auto;
`;

export const DataItem = styled.li`
  list-style: none;
  padding: 8px;
  min-width: 50px;
  text-align: center;
  background-color: ${RandomColor};
`;
export const DataTitle = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const DataPercent = styled.span`
  display: block;
  font-weight: 500;
`;
