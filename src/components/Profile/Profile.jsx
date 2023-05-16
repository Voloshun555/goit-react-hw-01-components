import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css'


export const Profile = user => {
    const {username, tag, location, avatar, stats:{followers, views, likes}} = user
   return <div className={css.profileCard}>
   <div className={css.description}>
     <img
       src={avatar}
       alt="User avatar"
       className={css.avatar}
     />
     <div className={css.userItem}>
     <p className={css.userName}>{username}</p>
     <p className={css.userTag}>@{tag}</p>
     <p className={css.userLocation}>{location}</p>
     </div>
     
   </div>
 
   <ul className={css.stats}>
     <li className={css.statsItem}>
       <span>Followers</span>
       <span>{followers}</span>
     </li>
     <li className={css.statsItem}>
       <span>Views</span>
       <span>{views}</span>
     </li>
     <li className={css.statsItem}>
       <span>Likes</span>
       <span>{likes}</span>
     </li>
   </ul>
 </div>
    
}
Profile.defaultProps = {
    username: 'unknown user',
    tag: 'no tag',
    location: 'no location',
    avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    followers: 0,
    views:  0,
    likes: 0,
  };

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
    }  
  
  
