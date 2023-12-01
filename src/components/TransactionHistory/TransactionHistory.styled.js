import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
  width: 800px;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 5px 5px 5px grey;
  margin-top: 60px;
`;

export const StyledTableHead = styled.thead`
  background-color: #00aeef;
  color: white;
`;

export const StyledTableHeader = styled.th`
  padding: 10px;
  text-align: left;
  font-size: 34px;
  border-bottom: 1px solid #ddd;
  border-right: 2px solid #ffffff;
  text-align: center;
  &:last-child {
    border-right: none;
  }
`;

export const StyledTableRow = styled.tr`
  background-color: ${props => (props.isEven ? 'lightgrey' : 'white')};
  &:last-child td {
    border-bottom: none;
  }
`;

export const StyledTableData = styled.td`
  padding: 10px;
  text-align: left;
  font-size: 24px;
  border-bottom: 1px solid #ddd;
  border-right: 2px solid #ffffff;
  text-align: center;
  &:last-child {
    border-right: none;
  }
`;
