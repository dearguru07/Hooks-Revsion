import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Effect from './Effect';

const App=()=>{
  const [a,seta]=useState(0)
  return <div>
      <h4>{a}</h4>
      <button onClick={()=>{
        seta(a+1)
      }}>click here</button>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Effect/>);
