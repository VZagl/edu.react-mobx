import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import type { T_CounterAutoStore } from "../../stores/CounterAutoStore";

type T_CounterAutoProps = { id?: number; store: T_CounterAutoStore };

export default observer((props: T_CounterAutoProps) => {
  const { id } = props;
  const store = props.store;
  const { count, inc, dec, double, actionList } = store;
  const actions = actionList.join(", ");

  useEffect(() => {
    console.log(`## CounterAuto(${id})/useEffect[actionList]`);
    // actions = actionList.join(", ");
  }, [actionList]);

  console.log(`## CounterAuto(${id})/render`);
  return (
    <div className="App-header flex-col">
      <h3>CounterAuto ({id})</h3>
      <div>
        count ={count}, double ={double}
      </div>
      <div>Actions: {actions}</div>
      <div className="flex-row">
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={() => (store.count = 0)}>reset</button>
      </div>
    </div>
  );
});
