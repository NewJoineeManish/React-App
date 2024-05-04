import styles from "./Item.module.css";
function Item({ item }) {
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{item}</span>
      </li>
    </>
  );
}
export default Item;
