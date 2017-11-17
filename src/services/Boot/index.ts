import initialState from "../AppState/initialState";
import AppState from "../AppState";
import ReactBoot from "../React";

export default class Boot {
  constructor() {
    this.boot();
  }

  boot() {
    const appState = AppState.create(initialState);
    const react = new ReactBoot(appState);
    return react;
  }
}
