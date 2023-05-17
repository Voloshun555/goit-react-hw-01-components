import PropTypes, { arrayOf } from 'prop-types';
import css from 'components/FriendList/FriendList.module.css'
import {FriendListItem} from 'components/FriendList/FriendListItem'

    export const FriendList = ({friends}) => {
    
return (
    <ul>
 {friends.map(({id, avatar, name, isOnline}) => {
   return <FriendListItem
        key={id}
        name={name}
        avatar={avatar}
        id={id}
        isOnline={isOnline}
    />
 })}
 
</ul>
)
}

FriendList.proTotype = {
    friends: PropTypes.arrayOf(
PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
})

    ).isRequired
}