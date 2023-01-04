import PropTypes from 'prop-types';
import { AvatarPropTypes } from 'components/avatar/Avatar.types';

export const UserInfoPropTypes = {
  ...AvatarPropTypes,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
