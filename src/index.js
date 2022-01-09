// import { div } from "prelude-ls";
// import React from "react";
// import reactDom from "react-dom";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./data.json";
import App from "./App";

const div = document.querySelector("#root");
// console.log(div)

ReactDOM.render(<App title={"qwe"} stats={data} />, div);

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
