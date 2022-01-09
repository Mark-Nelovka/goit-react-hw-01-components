import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
export default function FriendListApp() {
  return <FriendList friends={friends} />;
}
