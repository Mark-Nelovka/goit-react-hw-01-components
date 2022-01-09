import PropTypes from "prop-types";
import s from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={s.item}>
            {isOnline ? (
              <span className={s.statusOn}></span>
            ) : (
              <span className={s.statusOf}></span>
            )}
            <img
              className={s.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{name}</p>
            <button type="button" className={s.btn}>
              Написать {name}
            </button>
            {/* <p ></p> */}
          </li>
        );
      })}
    </ul>
  );
}

FriendList.proptTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnlain: PropTypes.bool,
};
