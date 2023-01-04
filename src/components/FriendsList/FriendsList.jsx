import Box from 'components/Box/Box.styled';
import FriendsListItem from 'components/FriendListItem/FriendListItem';
import { FriendsListPropTypes } from './FriendsList.types';

export default function FriendsList({ friends }) {
  return (
    <Box as="ul" mb={3}>
      {friends.map(({ id, ...friend }) => (
        <FriendsListItem key={id} {...friend} />
      ))}
    </Box>
  );
}

FriendsList.propTypes = FriendsListPropTypes;
