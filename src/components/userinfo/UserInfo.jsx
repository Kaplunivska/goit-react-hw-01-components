import Avatar from 'components/avatar/Avatar';
import { UserInfoPropTypes } from './UserInfo.types';
import css from './UserInfo.module.css';

export default function UserInfo({ avatarUrl, username, tag, location }) {
  return (
    <div className={css.description}>
      <Avatar avatarUrl={avatarUrl} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
}

UserInfo.propTypes = UserInfoPropTypes;
