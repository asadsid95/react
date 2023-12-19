export default function Button() {
  const handleClick = (event) => {
    console.log("clicked!!");
  };
  return <button onClick={handleClick}>Click me!</button>;
}
