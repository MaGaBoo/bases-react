import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number,
  clicks: number
}

const CounterBy = ({ initialValue = 5 }: Props) => {
  const [ { counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number ) => {
    setCounterState(({ counter, clicks }) =>( {
      counter: counter + value,
      clicks: clicks + 1
    })
    )
  };

  return (
    <>
      <h1>CounterBy: { counter }</h1>
      <h2>Clicks: { clicks }</h2>
      <button className="btn btn-light mx-2" onClick={() => handleClick(1)}>
        +1
      </button>

      <button className="btn btn-light" onClick={() => handleClick(5)}>
        +5
      </button>
    </>
  );
};

export default CounterBy;
