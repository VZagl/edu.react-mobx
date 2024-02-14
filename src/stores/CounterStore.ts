import { makeObservable, observable, action } from "mobx";

class CounterStore {
  constructor() {
    makeObservable(this, {
      count: observable,
      inc: action,
      dec: action,
    });
  }

  count = 0;

  dec = () => {
    // console.log("## CounterStore/decrease 1", this.count);
    this.count -= 1;
    // console.log("## CounterStore/decrease 2", this.count);
  };

  inc = () => {
    // console.log("## CounterStore/increase 1", this.count);
    this.count += 1;
    // console.log("## CounterStore/increase 2", this.count);
  };
}

const store = new CounterStore();
export default store;
