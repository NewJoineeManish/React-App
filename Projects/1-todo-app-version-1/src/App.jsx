import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  let itemList = [
    { name: "8 Hrs Sleep", date: "4/10/2023" },
    { name: "Drink Water", date: "4/10/2023" },
    { name: "Buy Milk", date: "4/10/2023" },
    { name: "Fruit Salad", date: "4/10/2023" },
    { name: "Like this video", date: "Right Now" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="container">
        <TodoItem itemList={itemList} />

        {/* <TodoItem name={"Buy Milk"} date={"4/10/2023"} />
        <TodoItem name={"Yoga"} date={"4/10/2023"} />
        <TodoItem name={"8 Hrs Sleep"} date={"4/10/2023"} /> */}
      </div>
    </center>
  );
}

export default App;
