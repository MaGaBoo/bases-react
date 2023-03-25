import { useReducer } from "react";
import { doIncreaseBy, doReset } from "./interfaces/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(doReset());
  };

  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Segmentado: { counterState.counter } </h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button className="btn btn-light" onClick={() => increaseBy(1)}>
        +1
      </button>
      <button className="btn btn-light" onClick={() => increaseBy(5)}>
        +5
      </button>
      <button className="btn btn-light" onClick={() => increaseBy(10)}>
        +10
      </button>
      <button className="btn btn-light" onClick={handleReset}>
        reset
      </button>
    </>
  );
};

export default CounterReducerComponent;
