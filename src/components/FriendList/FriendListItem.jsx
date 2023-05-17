import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const availableClass = [
    css.status,
    isOnline ? css.available : css.notAvailable,
  ];

  return (
    <li className={css.listStail}>
      <span className={availableClass.join(' ')}></span>

      <img src={avatar} alt="User avatar" width="48" />

      <p>{name}</p>
    </li>
  );
};


FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
