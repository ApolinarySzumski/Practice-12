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
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>--------------------------------------------------------------</div>
      <Statictics title="Upload stats" stats={stats} />
      <div>--------------------------------------------------------------</div>
      <FriendList friends={friends} />
      <div>--------------------------------------------------------------</div>
      <TransactionHistory items={items} />
    </>
  );
};
