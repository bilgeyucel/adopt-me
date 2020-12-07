import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";
// import Pet from "./Pet";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Navbar />
        <Router>
          <SearchParams path={"/"} />
          <Details path={"/details/:id"} />
        </Router>
      </div>
    </ThemeContext.Provider>
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
