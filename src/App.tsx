import React from 'react';
import Counter from './bases/Counter';
import CounterBy from './bases/CounterBy';
import CounterEffect from './bases/CounterEffect';
import CounterHook from './bases/CounterHook';

function App() {
  return (
    <div className="App">
      <>
      <h1>React</h1>
      <hr/>
      <Counter initialValue={0} />
      <CounterBy />
      <CounterEffect />
      <CounterHook /> 
      </>
    </div>
  );
}

export default App;
