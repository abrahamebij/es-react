function MCard(props) {
  return (
    <div className="text-center">
      <p>{props.value}</p>
      <p>{props.unit}</p>
    </div>
  )
}

export default MCard;