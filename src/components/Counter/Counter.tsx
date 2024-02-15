import React from "react";
import { observer } from "mobx-react-lite";

import counterStore from "../../stores/CounterStore";
// import "./App.css";
type T_Props = { id: number };

export default observer((props: T_Props) => {
  const { count, inc, dec } = counterStore;
  const { id } = props;

  console.log(`## Counter(${id})/render`);
  return (
    <div className="App-header">
      <h1>Counter</h1>
      <div>count ={count}</div>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={() => (counterStore.count = 0)}>reset</button>
    </div>
  );
});
