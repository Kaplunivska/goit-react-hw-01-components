import { FriendListItemPropTypes } from 'components/FriendListItem/FriendListItem.types';
import PropTypes from 'prop-types';

export const FriendsListPropTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      ...FriendListItemPropTypes,
      id: PropTypes.number.isRequired,
    })
  ),
};
