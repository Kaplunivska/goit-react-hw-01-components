import Box from 'components/Box/Box.styled';
import styled from 'styled-components';

export const FriendListItemStyled = styled(Box).attrs({
  as: 'li',
  display: 'flex',
  alignItems: 'center',
  bg: 'white',
  borderRadius: 'small',
  overflow: 'hidden',
  boxShadow: 'box',
})`
  gap: ${({ theme }) => `${theme.space[3]}px`};

  width: 200px;
  padding: ${({ theme }) => `${theme.space[2]}px`};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => `${theme.space[2]}px`};
  }

  img {
    width: 48px;
    height: 48px;
  }
`;

export const OnlineIndicator = styled.span`
  width: 10px;
  height: 10px;

  border-radius: ${({ theme }) => theme.radii.circle};
  background-color: ${({ theme, isOnline }) =>
    isOnline ? theme.colors.online : theme.colors.offline};
`;
