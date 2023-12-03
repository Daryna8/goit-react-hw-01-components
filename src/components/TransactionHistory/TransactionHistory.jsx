import PropTypes from 'prop-types';
import {
  StyledTransactionHistory,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
  StyledTableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
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
        {items.map(({ id, index, type, amount, currency }) => (
          <StyledTableRow key={id} $isEven={index % 2}>
            <StyledTableData>{type}</StyledTableData>
            <StyledTableData>{amount}</StyledTableData>
            <StyledTableData>{currency}</StyledTableData>
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
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
