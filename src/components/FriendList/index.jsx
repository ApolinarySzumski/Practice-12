import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="w-screen p-16 flex flex-col items-center text-yellow-300 text-3xl font-light leading-8 gap-y-4">
      {friends.map(friend => (
        <li
          key={friend.id}
          className="w-screen flex flex-row-reversed items-center justify-center gap-10"
        >
          <span
            className={`${
              friend.isOnline === true ? 'bg-green-500' : 'bg-red-500'
            } block w-4 h-4  rounded-full`}
          ></span>
          <img
            className="w-20 h-fit"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="w-20 text-center">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }.isRequired
  ).isRequired,
};

export default FriendList;
