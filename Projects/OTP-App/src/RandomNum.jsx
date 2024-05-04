import { useState } from "react";
import "./App.css";

function RandomNum() {
  const [num, setNum] = useState();
  const [max, setMax] = useState(900000);
  const [min, setMin] = useState(100000);

  const randomFunction = () => {
    const minV = parseInt(min);
    const maxV = parseInt(max);
    const random = Math.floor(Math.random() * 900000 + 100000);
    setNum(random);
  };

  return (
    <>
      <h1>Random Number Generator</h1>
      <button onClick={randomFunction}>Generate Random Number</button>
      <p className="kgBold">Random Number: {num}</p>
    </>
  );
}
export default RandomNum;
