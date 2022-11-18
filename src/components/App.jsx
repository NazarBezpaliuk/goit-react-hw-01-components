import { Container } from './App.styled';

import Profile from './Profile/Profile';
import Stats from './Statistics/Statistics';
import DataList from './Statistics/DataList';
import FriendList from './FriendList/FriendList';
import TransactionsHistory from './Transaction/Operations';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" elements={data}>
        <DataList elements={data} />
      </Stats>
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />;
    </Container>
  );
};
