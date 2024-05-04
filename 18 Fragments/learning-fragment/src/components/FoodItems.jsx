import Item from "./Item";

function FoodItems({ foodList }) {
  return (
    <>
      <ul className="list-group text-start">
        {foodList.map((item) => (
          <Item key={item} item={item} />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
