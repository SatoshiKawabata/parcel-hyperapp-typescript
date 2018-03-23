import { h } from "hyperapp";
import Actions from "./Actions";
import IState from "./IState";
import { pstyle } from "./picostyle";

const Wrapper = pstyle("div")({
    h1: {
        "color": "blue",
        "font-size": "20px"
    },
    button: {
        color: "red"
    }
});

export default (state: IState, actions: Actions) => (
  <Wrapper>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </Wrapper>
);
