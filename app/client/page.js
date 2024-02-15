'use client';
import React,{useState} from "react";

const Client = () => {
  const [count,setCount] = useState(0);
  return <div>
    <h1 className="text-7xl">{count}</h1>
<button 
className="btn btn-primary"
onClick={() => setCount((prevCount) => prevCount + 1)}
 >Increment</button>
  </div>;
};

export default Client;
