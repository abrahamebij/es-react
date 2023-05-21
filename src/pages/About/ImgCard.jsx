function ImgCard(props) {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <img
        src={props.src}
        className="rounded-full border-[.7rem] border-primary w-36 h-36"
        alt={'Picture of ' + props.name}
      />
      <h3 className="font-semibold text-lg">{props.name}</h3>
    </div>
  );
}

export default ImgCard;
