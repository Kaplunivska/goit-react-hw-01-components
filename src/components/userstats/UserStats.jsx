import { numberWithCommas } from 'utils';
import css from './UserStats.module.css';
import { UserStatsPropTypes } from './UserStats.types';

export default function UserStats({ followers, views, likes }) {
  return (
    <ul className={css.stats}>
      <li className={css.statsItem}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{numberWithCommas(followers)}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{numberWithCommas(views)}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{numberWithCommas(likes)}</span>
      </li>
    </ul>
  );
}

UserStats.propTypes = UserStatsPropTypes;
