import { Profile } from "components/Profile/Profile";
import {Statistics} from 'components/Statistics/Statistics'
import user from 'data/user.json';
import css from 'components/AppCss.module.css'



export const App = () => {
  return (
    <div>
      <section className={css.section}>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
</section>
<section className={css.section}>
<Statistics/>
</section>
    </div>
    

)
  
};
