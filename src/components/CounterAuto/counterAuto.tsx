import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import counterAutoStore from "../../stores/CounterAutoStore";
type T_Props = { id?: number };

export default observer((props: T_Props) => {
  const { count, inc, dec, double, actionList } = counterAutoStore;
  const { id } = props;
  const actions = actionList.join(", ");

  useEffect(() => {
    console.log(`## CounterAuto(${id})/useEffect[actionList]`);
    // actions = actionList.join(", ");
  }, [actionList]);

  console.log(`## CounterAuto(${id})/render`);
  return (
    <div className="App-header">
      <h1>CounterAuto</h1>
      <div>
        count ={count}, double ={double}
      </div>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={() => (counterAutoStore.count = 0)}>reset</button>
      <div>Actions: {actions}</div>
    </div>
  );
});
