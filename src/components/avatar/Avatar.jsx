import css from './Avatar.module.css';
import { AvatarPropTypes } from './Avatar.types';

export default function Avatar({ avatarUrl }) {
  const defaultAvatarUrl =
    'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

  return (
    <img
      src={avatarUrl ?? defaultAvatarUrl}
      alt="User avatar"
      width="100"
      height="100"
      className={css.avatar}
    />
  );
}

Avatar.propTypes = AvatarPropTypes;
