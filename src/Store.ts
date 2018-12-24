import { observable, decorate } from "mobx";

class TestStore {
  x: number

  constructor() {
    this.x = 1
  }
}

export default decorate(TestStore, {
  x: observable
})