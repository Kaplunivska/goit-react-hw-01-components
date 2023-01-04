import UserInfo from 'components/userinfo/UserInfo';
import css from './Profile.module.css';
import UserStats from 'components/userstats/UserStats';
import { ProfilePropTypes } from './Profile.types';

export default function Profile({ username, tag, location, stats, avatarUrl }) {
  return (
    <div className={css.profile}>
      <UserInfo
        username={username}
        tag={tag}
        location={location}
        avatarUrl={avatarUrl}
      />
      <UserStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
}

Profile.propTypes = ProfilePropTypes;
