import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";

import counterStore from "../../stores/CounterStore";
import counterAutoStore, { StoreAuto } from "../../stores/CounterAutoStore";
import Counter from "../Counter/Counter";
import CounterAuto from "../CounterAuto/counterAuto";
import "./App.css";

export default observer(() => {
  const { count } = counterStore;
  const { count: countAuto } = counterAutoStore;
  const store23 = useMemo(() => new StoreAuto(), []);

  console.log("## App/render ");
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>MobX Counter test</h1>
        </header>
        <h2>Counter, count = {count}</h2>
        <Counter id={11} />
        <Counter id={12} />
      </div>
      <div className="App">
        <header className="App-header">
          <h1>CounterAuto, count = {countAuto}</h1>
        </header>
        <CounterAuto id={21} />
        <CounterAuto id={22} />
        <CounterAuto id={23} counterAutoStore={store23} />
      </div>
    </>
  );
});
