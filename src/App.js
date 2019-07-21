import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <header>
        <Link to={"/ "}>Adopt-me!</Link>
      </header>
      <Router>
        <SearchParams path={"/"} />
        <Details path={"/details/:id"} />
      </Router>
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
