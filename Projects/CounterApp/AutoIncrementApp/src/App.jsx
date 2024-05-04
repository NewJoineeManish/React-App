import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const css = {
    "font-size": "30px",
    margin: "10px",
    padding: "15px",
  };
  // const increment = () => {
  //   setNum()
  // }
  useEffect(() => {
    const interval = setInterval(() => {
      setNum(num + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [num]);

  return (
    <>
      <center>
        <div style={css}>{num}</div>
        <button style={css} onClick={() => setNum(num + 1)}>
          +
        </button>
        <button style={css} onClick={() => num > 0 && setNum(num - 1)}>
          -
        </button>
      </center>
    </>
  );
}

export default App;
