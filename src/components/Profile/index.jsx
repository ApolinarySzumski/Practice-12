import PropTypes from 'prop-types';

const Profile = props => {
  return (
    <div className="text-gray-200 bg-sky-900 font-mono mb-16 p-16 space-y-6 flex flex-col items-center rounded-full border-solid border-4 border-orange-600 w-128 h-fit">
      <div className="flex flex-col gap-y-2">
        <img
          src={props.avatar}
          alt="User avatar"
          className="w-40 h-40 rounded-full"
        />
        <p>{props.username}</p>
        <p>{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul className="flex flex-col gap-y-2">
        <li>
          <span>Followers</span>
          <span>: {props.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>: {props.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>: {props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
