const header = ["Title", "Subtitle"];

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <img src={props.image} alt={props.alt} />
    </div>
  );
}
