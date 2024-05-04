import css from "./myCss.module.css";
function Item({ itemName, itemDate }) {
  return (
    <>
      <div className={`${css["kg-row"]} container`}>
        <div className={`row ${css["items-container"]}`}>
          <div className="col-5">{itemName}</div>
          <div className="col-5">{itemDate}</div>
          <div className="col-2">
            <button className={`${css.kgbutton} btn btn-danger`}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
