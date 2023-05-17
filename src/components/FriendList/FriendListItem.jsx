import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css'

export const FriendListItem = (props) => {

    const availableClass = [
        css.status,
        props.isOnline ? css.available : css.notAvailable,
      ];

    return ( 
    <li className={css.listStail} id={props.id}>

    <span className={availableClass.join(" ")}></span>

    <img 
    src={props.avatar} 
    alt="User avatar" 
    width="48" />

    <p >{props.name}</p>
  </li>)
}

FriendListItem.defaultProps = {
    avatar:
      "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
    name: "Ungiven",
    isOnline: false,
  };

  FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  }