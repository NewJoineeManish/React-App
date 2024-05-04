import Item from "./Item";
function TodoItem({ itemList }) {
  return (
    <>
      {itemList.map((item) => (
        <Item itemName={item.name} itemDate={item.date} />
      ))}
    </>
  );
}

export default TodoItem;
