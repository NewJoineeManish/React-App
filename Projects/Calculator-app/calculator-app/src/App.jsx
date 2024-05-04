import css from "./App.module.css";
import ButtonKey from "./Components/ButtonKey";
import Display from "./Components/display";

function App() {
  let btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "+",
  ];

  return (
    <>
      <div className={css.calculator}>
        <Display></Display>
        <ButtonKey btn={btn}></ButtonKey>
      </div>
    </>
  );
}

export default App;
