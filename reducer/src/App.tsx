import { FC, useReducer } from "react";

interface State {
  count: number;
  lastAction: string;
}

interface Action {
  type: string;
}

const initialState = { count: 0, lastAction: "unknown" };
// The reducer function
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, lastAction: action.type };
    case "decrement":
      return { count: state.count - 1, lastAction: action.type };
    case "reset":
      return { count: (state.count = 0), lastAction: action.type };
    default:
      return { count: state.count, lastAction: "unknown" };
  }
}

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Last Action: {state.lastAction}</p>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default App;
