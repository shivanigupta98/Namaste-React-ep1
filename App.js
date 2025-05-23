import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

{
  /* 
    <div id="parent">
    <div id="child"></div>
    <h1>I am an h1 tag</h1>
    <h2>I am an h2 tag</h2>
      <div id="child2"></div>
    <h1>I am an h1 tag</h1>
    <h2>I am an h2 tag</h2>
</div>
 */
}
