import QuizApp from "./Components/QuizAppComp";
import css from "./App.module.css";

function App() {
  return (
    <>
      <div>
        <h1 className={css.textCenter}>Simple Quiz App</h1>
        <QuizApp />
      </div>
    </>
  );
}

export default App;
