import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";

import counterStore from "../../stores/CounterStore";
import counterAutoStore, {
  T_CounterAutoStore,
} from "../../stores/CounterAutoStore";
import Counter from "../../components/Counter/Counter";
import CounterAuto from "../../components/CounterAuto/counterAuto";
import "./App.css";

export default observer(() => {
  const { count } = counterStore;
  const { count: countAuto } = counterAutoStore;
  const store23 = useMemo(() => new T_CounterAutoStore(), []);

  console.log("## App/render ");
  return (
    <div>
      <div className="App">
        <div className="App-header flex-row">
          <h1>MobX Counter test</h1>
          <h2>Counter, count = {count}</h2>
        </div>
        <div className="flex-row">
          <Counter id={11} store={counterStore} />
          <Counter id={12} store={counterStore} />
        </div>
      </div>
      <div className="App">
        <div className="App-header">
          <h1>CounterAuto, count = {countAuto}</h1>
        </div>
        <div className="flex-row">
          <CounterAuto id={21} store={counterAutoStore} />
          <CounterAuto id={22} store={counterAutoStore} />
        </div>
      </div>
      <div className="App flex-row">
        <CounterAuto id={23} store={store23} />
      </div>
    </div>
  );
});
