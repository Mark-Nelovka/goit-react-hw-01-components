import user from "./Profile/user.json";
import Profile from "./Profile/Profile";
import Transaction from "./TransactionsApp";
import FriendList from "./FriendListApp";
import Statistics from "./Statistics";
export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList />
      <Transaction />
    </>
  );
}
