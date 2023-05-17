import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css'


export const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) => {
    
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

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
    })
    
    }  
  
  
