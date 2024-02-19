import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import counterAutoStore from "../../stores/CounterAutoStore";
import type { StoreAuto as T_StoreAuto } from "../../stores/CounterAutoStore";

type T_Props = { id?: number; counterAutoStore?: T_StoreAuto };

export default observer((props: T_Props) => {
  const { id } = props;
  const store = props.counterAutoStore || counterAutoStore;
  const { count, inc, dec, double, actionList } = store;
  const actions = actionList.join(", ");

  useEffect(() => {
    console.log(`## CounterAuto(${id})/useEffect[actionList]`);
    // actions = actionList.join(", ");
  }, [actionList]);

  console.log(`## CounterAuto(${id})/render`);
  return (
    <div className="App-header">
      <h1>CounterAuto ({id})</h1>
      <div>
        count ={count}, double ={double}
      </div>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={() => (store.count = 0)}>reset</button>
      <div>Actions: {actions}</div>
    </div>
  );
});
