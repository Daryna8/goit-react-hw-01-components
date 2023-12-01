import PropTypes from 'prop-types';
import {
  StyledTransactionHistory,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
  StyledTableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items = [] }) => {
  return (
    <StyledTransactionHistory className="transaction-history">
      <StyledTableHead>
        <tr>
          <StyledTableHeader>Type</StyledTableHeader>
          <StyledTableHeader>Amount</StyledTableHeader>
          <StyledTableHeader>Currency</StyledTableHeader>
        </tr>
      </StyledTableHead>

      <tbody>
        {items.map((el, index) => (
          <StyledTableRow key={el.id} isEven={index % 2}>
            <StyledTableData>{el.type}</StyledTableData>
            <StyledTableData>{el.amount}</StyledTableData>
            <StyledTableData>{el.currency}</StyledTableData>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTransactionHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
