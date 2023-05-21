function Card(props) {
  return (
    <div>
      <h2 className="font-semibold pb-1 text-lg">{props.title}</h2>
      {props.desc.map((e, i) => {
       return <p className="py-1" key={i}>{e}</p>
      })}
    </div>
  );
}

export default Card;
