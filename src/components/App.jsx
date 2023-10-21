import Profile from './Profile';
import user from '../data/user.json';
import Statictics from './Statistics';
import stats from '../data/data.json';
import FriendList from './FriendList';
import friends from '../data/friends';
import TransactionHistory from './TransactionHistory';
import items from '../data/transactions';

export const App = () => {
  return (
    <div className="flex flex-col items-center bg-sky-500 divide-y-2 divide-slate-800 pt-10">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statictics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
