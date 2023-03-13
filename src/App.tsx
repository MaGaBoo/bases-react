import React from 'react';
import Counter from './bases/Counter';
import CounterBy from './bases/CounterBy';

function App() {
  return (
    <div className="App">
      <>
      <h1>React</h1>
      <hr/>
      <Counter initialValue={0} />
      <CounterBy />
      </>
    </div>
  );
}

export default App;
