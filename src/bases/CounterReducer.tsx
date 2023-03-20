import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };
    case "increaseBy":
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };
    default:
      return state;
  }
};

const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const increaseBy = (e: any) => {
    const increaseValue = e.target.value
    dispatch({ type: "increaseBy", payload: increaseValue });
  };

  return (
    <>
      <h1>Counter Reducer: { counterState.counter } </h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button className="btn btn-light" onClick={increaseBy}>
        +1
      </button>
      <button className="btn btn-light" onClick={increaseBy}>
        +5
      </button>
      <button className="btn btn-light" onClick={increaseBy}>
        +10
      </button>
      <button className="btn btn-light" onClick={handleReset}>
        reset
      </button>
    </>
  );
};

export default CounterReducerComponent;
