import PropTypes from 'prop-types';

export const AvatarPropTypes = {
  avatarUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(null),
  ]),
};
