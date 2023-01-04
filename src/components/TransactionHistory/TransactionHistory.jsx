import {
  TransactionsHistoryCell,
  TransactionsHistoryHeader,
  TransactionsHistoryHeaderCell,
  TransactionsHistoryRow,
  TransactionsHistoryTable,
} from './TransactionHistory.styled';
import { TransactionHistoryPropTypes } from './TransactionHistory.types';

export default function TransactionHistory({ items }) {
  return (
    <TransactionsHistoryTable>
      <TransactionsHistoryHeader>
        <tr>
          <TransactionsHistoryHeaderCell>Type</TransactionsHistoryHeaderCell>
          <TransactionsHistoryHeaderCell>Amount</TransactionsHistoryHeaderCell>
          <TransactionsHistoryHeaderCell>
            Currency
          </TransactionsHistoryHeaderCell>
        </tr>
      </TransactionsHistoryHeader>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionsHistoryRow key={id} isOdd={index % 2}>
            <TransactionsHistoryCell>{type}</TransactionsHistoryCell>
            <TransactionsHistoryCell>{amount}</TransactionsHistoryCell>
            <TransactionsHistoryCell>{currency}</TransactionsHistoryCell>
          </TransactionsHistoryRow>
        ))}
      </tbody>
    </TransactionsHistoryTable>
  );
}

TransactionHistory.propTypes = TransactionHistoryPropTypes;
