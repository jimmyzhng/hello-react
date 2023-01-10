import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Application = () => {

  const [name, setName] = useState("");
  const onChange = (event) => {
    setName(event.target.value);
  };

  const reset = () => setName("");

  return (
    <main>
      <input placeholder="Type your name :)" value={name} onChange={onChange}></input>
      <button onClick={reset}>Reset</button>
      <h1>{name && `Hello ${name}`}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
