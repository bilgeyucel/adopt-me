import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id={"something-importatn"}>Adopt-me!</h1>
      {/* <Pet name="Kedi" animal="Cat" breed="siyam" />
      <Pet name="Kopek" animal="Dog" breed="golden" />
      <Pet name="Kus" animal="Bird" breed="papagan" /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// ReactDOM.render(
//     React.createElement(
//         "div", //what kind of tag it is
//         {id:"something-important"}, // attributes we can give
//         React.createElement( "h1", {}, "Adopt-me!") // children
//     ),
//     document.getElementById("root")
// );
