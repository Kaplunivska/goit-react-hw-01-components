import { UserInfoPropTypes } from 'components/userinfo/UserInfo.types';
import { UserStatsPropTypes } from 'components/userstats/UserStats.types';
import PropTypes from 'prop-types';

export const ProfilePropTypes = {
  ...UserInfoPropTypes,
  stats: PropTypes.exact({
    ...UserStatsPropTypes,
  }),
};
