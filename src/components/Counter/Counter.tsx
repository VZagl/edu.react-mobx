import React from "react";
import { observer } from "mobx-react-lite";

import { T_CounterStore } from "../../stores/CounterStore";
// import "./App.css";
type T_CounterProps = { id: number; store: T_CounterStore };

export default observer((props: T_CounterProps) => {
  const store = props.store;
  const { count, inc, dec } = store;
  const { id } = props;

  console.log(`## Counter(${id})/render`);
  return (
    <div className="App-header flex-col">
      <h3>Counter ({id})</h3>
      <div>count ={count}</div>
      <div className="flex-row">
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={() => (store.count = 0)}>reset</button>
      </div>
    </div>
  );
});
