import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import counterStore from "../../stores/CounterStore";
import Counter from "../Counter/Counter";
import "./App.css";

export default observer(() => {
  // const { count } = counterStore;

  console.log("## App/render ");
  return (
    <div className="App">
      <header className="App-header">{/* <h1>{count}</h1> */}</header>
      <Counter />
      <Counter />
    </div>
  );
});
