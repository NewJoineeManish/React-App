function SecondTextLine() {
  var date = new Date();
  var time = "10:38:17 AM";
  return (
    <>
      <p>
        This is the current time : {date.toLocaleDateString()} -
        {date.toLocaleTimeString()}
      </p>
    </>
  );
}

export default SecondTextLine;
