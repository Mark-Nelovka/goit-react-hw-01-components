// import Profile from "./Profile/Profile";
// import user from "./user.json";
// import Statistics from "./Statistics/Statistics";
// import data from './data.json'
export default function App({ title = "", stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}</span>
        </li>
      </ul>
      {/* <li className="item">
      <span className="label">.{stats}</span>
      <span className="percentage">{stats}</span>
    </li>
    <li className="item">
      <span className="label">{stats}</span>
      <span className="percentage">{stats}</span>
    </li>
    <li className="item">
      <span className="label">{stats}</span>
      <span className="percentage">{stats}</span>
    </li>
  </ul> */}
    </section>
  );
}
{
  /* <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />  */
}
