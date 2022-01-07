import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';

const div = document.querySelector("#root");

const element = <div>Hello world</div>;

ReactDOM.render(element, div);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
