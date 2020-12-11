import React, { useState }from 'react';
import ShowInput from './pages/ShowInput';
import './App.css';

function App() {
  const value1 = false
  const value2 = ["Knock knock.", "Who’s there?", "Atch.", "Atch who?", "Bless you!"]
  const value3 = 'The value of the prop'
  const[input, setInput] = useState(value1);
  return (
    <div className="wrapper">
      Choose one below:
      <br />
      <br />
      <button className="button" onClick={(e) => setInput(value1)}>Falsy Value</button>
      <br />
      <br />
      <button className="button" onClick={(e) => setInput(value2)}>An Array</button>
      <br />
      <br />
      <button className="button" onClick={(e) => setInput(value3)}>Anything Else</button>
      <br />
      <br />
      <ShowInput input={input}/>
    </div>
  );
}

export default App;
