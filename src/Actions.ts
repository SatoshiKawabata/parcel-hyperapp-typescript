import IState from "./IState";

export default class Actions {
    down = (value: number) => (state: IState) => ({ count: state.count - value });
    up = (value: number) => (state: IState) => ({ count: state.count + value });
}
