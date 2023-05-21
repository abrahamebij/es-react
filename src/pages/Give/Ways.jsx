function Ways(props) {
  return (
    <div className="mb-5">
      <h3 className="font-semibold text-xl underline mb-2">{props.title}</h3>
      <p>
        {props.desc}
      </p>
    </div>
  );
}

export default Ways;