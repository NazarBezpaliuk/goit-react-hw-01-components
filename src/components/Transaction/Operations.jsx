import PropTypes from 'prop-types';
import {
  TableTransaction,
  TableHeader,
  TableHeaderRow,
  TableHeaderName,
  TableBody,
  TableBodyRow,
  TableBodyData
} from './Operations.styled';

export default function TransactionsHistory({ items }) {
  return (
    <TableTransaction>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderName>Type</TableHeaderName>
          <TableHeaderName>Amount</TableHeaderName>
          <TableHeaderName>Currency</TableHeaderName>
        </TableHeaderRow>
      </TableHeader>
      {items.map(item => (
        <TableBody key={item.id}>
          <TableBodyRow>
            <TableBodyData>{item.type}</TableBodyData>
            <TableBodyData>{item.amount}</TableBodyData>
            <TableBodyData>{item.currency}</TableBodyData>
          </TableBodyRow>
        </TableBody>
      ))}
    </TableTransaction>
  );
}

TransactionsHistory.protoTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}
