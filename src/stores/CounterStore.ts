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
    this.count -= 1;
  };

  inc = () => {
    this.count += 1;
  };
}

const store = new CounterStore();
export default store;
