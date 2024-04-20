import { makeObservable, observable, action } from "mobx";

export class T_CounterStore {
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

const store = new T_CounterStore();
export default store;
