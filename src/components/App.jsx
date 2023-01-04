import Profile from 'components/profile/Profile';
import Statistics from './statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import user from 'data/user.json';
import stats from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatarUrl={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
