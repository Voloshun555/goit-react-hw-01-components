import { Profile } from "components/Profile/Profile";
import {Statistics} from 'components/Statistics/Statistics';
import {FriendList} from 'components/FriendList/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';


import friends from 'data/friends.json';
import user from 'data/user.json';
import data from 'data/data.json';
import transactions from 'data/transactions.json';

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
<Statistics  title="Upload stats" stats={data}/>
</section>


<section className={css.section}>
<FriendList friends={friends} />
</section>
 
<section className={css.section}>
<TransactionHistory items={transactions}/>
</section>
</div>
    

)
  
};
