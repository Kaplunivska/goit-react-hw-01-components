import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const StatisticTitle = styled.h2`
  margin: 0;
  padding: ${({ theme }) => `${theme.space[3]}px 0`};

  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.space[2]}px`};

  padding: ${({ theme }) => `${theme.space[3]}px ${theme.space[4]}px`};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.random()};
`;
