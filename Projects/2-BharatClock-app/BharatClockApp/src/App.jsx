import AppName from "./Components/AppName";
import FirstTextLine from "./Components/FirstTextLine";
import SecondTextLine from "./Components/SecondTextLine";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <AppName></AppName>
      <FirstTextLine></FirstTextLine>
      <SecondTextLine></SecondTextLine>
    </center>
  );
}

export default App;
