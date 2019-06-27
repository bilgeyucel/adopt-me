import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div", //what kind of tag it is
    { id: "something-important" }, // attributes we can give
    React.createElement("h1", {}, "Adopt-me!"), // children
    React.createElement(Pet, { name: "Kedi", animal: "Cat", breed: "siyam" }),
    React.createElement(Pet, { name: "Kopek", animal: "Dog", breed: "golden" }),
    React.createElement(Pet, { name: "Kus", animal: "Bird", breed: "papagan" })
  );
};

render(React.createElement(App), document.getElementById("root"));

// ReactDOM.render(
//     React.createElement(
//         "div", //what kind of tag it is
//         {id:"something-important"}, // attributes we can give
//         React.createElement( "h1", {}, "Adopt-me!") // children
//     ),
//     document.getElementById("root")
// );
