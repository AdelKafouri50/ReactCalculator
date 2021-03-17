import React, { useState } from 'react';

function App() {

const [Counter, setCounter] = useState(0);


  return (
    <div>
      <h1>Currnet count: {Counter}</h1>
      <button onClick={()=>setCounter(Counter+1)}> Increase Counter</button>
    </div>
  );
}

export default App;
