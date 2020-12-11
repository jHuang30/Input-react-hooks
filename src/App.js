import React, { useState }from 'react';
import ShowInput from './pages/ShowInput'

function App() {
  const value1 = false
  const value2 = ['apple', 'pear', 'banana']
  const value3 = 'anything'
  const[input, setInput] = useState(value1);
  return (
    <>
      Choose from below: 
      <br />
      <br />
      <button onClick={(e) => setInput(value1)}>Falsy Value</button>
      <br />
      <br />
      <button onClick={(e) => setInput(value2)}>An Array</button>
      <br />
      <br />
      <button onClick={(e) => setInput(value3)}>Anything Else</button>
      <br />
      <br />
      <ShowInput input={input}/>
    </>
  );
}

export default App;
