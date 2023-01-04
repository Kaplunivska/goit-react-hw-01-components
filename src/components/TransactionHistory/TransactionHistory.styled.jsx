import Box from 'components/Box/Box.styled';
import styled from 'styled-components';

export const TransactionsHistoryTable = styled(Box).attrs({
  as: 'table',
  overflow: 'hidden',
  m: 0,
  p: 0,

  bg: 'white',
  borderRadius: 'small',
  boxShadow: 'box',
})`
  width: 100%;

  border-spacing: 0;
`;

export const TransactionsHistoryHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.tableHeader};
`;

export const TransactionsHistoryRow = styled.tr`
  background-color: ${({ theme, isOdd }) =>
    isOdd ? theme.colors.tableCellOdd : theme.colors.tableCellEven};
`;

export const TransactionsHistoryCell = styled(Box).attrs({
  as: 'td',
  py: 3,
  color: 'grey',
})`
  text-align: center;
  text-transform: capitalize;

  &:not(:last-child) {
    border-right: ${({ theme }) => theme.borders.tableCell};
  }
`;

export const TransactionsHistoryHeaderCell = styled(
  TransactionsHistoryCell
).attrs({
  as: 'th',
  color: 'inherit',
})`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;
