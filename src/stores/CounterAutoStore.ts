import { makeAutoObservable } from "mobx";

// type NumArray = [number, number] | number[];
type NumArray = number[];

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  actionList: NumArray = [];

  private _count: number = 0;

  get count() {
    return this._count;
  }

  set count(value) {
    /*
			https://mobx-cookbook.github.io/actions
			MobX не обязывает вас изменять наблюдаемые поля именно внутри экшенов. 
			Вы можете мутировать стейт откуда угодно, из любой части вашего приложения, хоть это и не рекомендовано.
		*/
    this._count = value;
    this.actionList.push(value);
  }

  inc = () => {
    this._count += 1;
    this.actionList.push(1);
  };

  dec = () => {
    this._count -= 1;
    this.actionList.push(-1);
  };

  get double() {
    return this.count * 2;
  }
}

const store = new Store();
export default store;
