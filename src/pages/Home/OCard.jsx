function OCard(props) {
  return (
    <div className="grid sm:grid-cols-2 justify-center items-center border border-t-0 hover:border-t hover:border-b-2 first:border first:hover:border-t-2 bg-white text-center px-5 py-3 gap-y-3 hover:shadow-2xl last:hover:shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold">{props.value}</h2>
      <p>{props.desc}</p>
    </div>
  )
}

export default OCard;