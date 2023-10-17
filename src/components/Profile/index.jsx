import PropTypes from 'prop-types';

const Profile = props => {
  return (
    <div className="text-gray-200 bg-sky-900 font-mono m-10 p-10 space-y-6 flex flex-col items-center rounded-full border-solid border-8 border-orange-600">
      <div className="flex flex-col gap-y-2">
        <img src={props.avatar} alt="User avatar" className="w-40 h-fit" />
        <p className="name">{props.username}</p>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className="flex flex-col gap-y-2">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">: {props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">: {props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">: {props.stats.likes}</span>
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
