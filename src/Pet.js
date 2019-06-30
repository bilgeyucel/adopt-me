import React from "react";

export default function Pet({ name, animal, breed }) {
  // export const Pet = ({ name, animal, breed }) => {
  // Bu da function olmasi yerine bir alternatif aslinda
  // {name, animal, breed} burada props aslida
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed)
  // );
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
