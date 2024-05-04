function ErrorMessage({ foodList }) {
  return <>{foodList.length === 0 ? <p>i am still hungry</p> : null}</>;
}
export default ErrorMessage;
