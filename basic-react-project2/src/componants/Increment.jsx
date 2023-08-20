import React, { useState } from "react";
import "./Increment.css";

const Increment = () => {
    const [num, setNum] = useState(1);

        function inc(){
          setNum(num + 1)
        }

        function dec(){
          setNum(num - 1)
        }

  return (
    <div className="box">
    <div className="container">
      <h1 className="num">{num} </h1>
      <div>
        <button className="btn" onClick={inc}>Increment</button>
        <button className="btn" onClick={dec}>Decrement</button>
      </div>
    </div>
    </div>
  );
};

export default Increment;
