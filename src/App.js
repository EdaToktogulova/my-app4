import React from 'react';
import { useSelector, useDispath} from 'react-redux';

function App() {
  const counter = useSelector(store => store);

  return (
    <div className='App'>
      <h1>0</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;