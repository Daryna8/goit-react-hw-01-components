export const FriendList = ({ friends = [] }) => {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <li className="item" key={el.id}>
          <span className={el.isOnline ? 'online' : 'offline'}></span>
          <img
            className="avatar"
            src={el.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{el.name}</p>
        </li>
      ))}
    </ul>
  );
};
