import css from "../ButtonKey.module.css";
function ButtonKey({ btn }) {
  // var btn = ["1", "2", "3"];

  return (
    <>
      <div className={css.buttonsContainer}>
        {btn.map((item) => (
          <button className={css.button}>{item}</button>
        ))}
      </div>
    </>
  );
}

export default ButtonKey;
