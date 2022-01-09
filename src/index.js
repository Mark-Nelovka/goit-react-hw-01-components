// import { div } from "prelude-ls";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProfileApp from "./App";
// import { doc } from "prettier";
import StatisticsApp from "./Statistics";
import FriendListApp from "./FriendListApp";
import TransactionsApp from "./TransactionsApp";

const div = document.querySelector("#root");

ReactDOM.render(
  <React.StrictMode>
    <ProfileApp />
    <StatisticsApp />
    <FriendListApp />
    <TransactionsApp />
  </React.StrictMode>,
  div
);

// ReactDOM.render(, div);
// ReactDOM.render(<App />, div);
// import App from './App';

// const elem1 = <span>Hello</span>;
// const elem2 = <span> world!</span>
// console.log(div)
// const element =
//     <div>
//         {elem1}
//         {elem2}
//     </div>;
// console.log(element)
// ReactDOM.render(element, div);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   div);
