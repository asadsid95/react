export default function Intro(props) {
  return (
    <div className="blog-post-intro">
      <h1>This is from main Intro section</h1>
      {props.children}
    </div>
  );
}
