import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import counterStore from "../../stores/CounterStore";
// import "./App.css";

const Counter = observer(() => {
  const { count, inc, dec } = counterStore;

  return (
    <div className="App-header">
      <h1>{count}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </div>
  );
});

export default Counter;
