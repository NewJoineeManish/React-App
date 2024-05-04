import css from "./AddTodo.module.css";
function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div className="col-5">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-5">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className={`${css.kgbutton} btn btn-success`}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
