import { FriendListItemStyled, OnlineIndicator } from './FriendListItem.styled';
import { FriendListItemPropTypes } from './FriendListItem.types';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <FriendListItemStyled>
      <OnlineIndicator isOnline={isOnline}></OnlineIndicator>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendListItemStyled>
  );
}

FriendsListItem.propTypes = FriendListItemPropTypes;
