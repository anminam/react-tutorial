import React, { Fragment, useState } from "react";
import { persons } from "../core";
import Person from "../components/Person";
import '../styles/index.css';
function App() {
  return (
    <ul>
      {
        persons && persons.map((person, i) => {
          return (
            <Person obj={person} key={i} />
          )
        })
      }
    </ul>
  );
}

export default App;