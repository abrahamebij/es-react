function Button(props) {
  return (
    <button
      aria-checked={props.ariaChecked}
      aria-label={props.title}
      title={props.title}
      type= {props.type}
      className={`bg-primary text-white dark:text-gray-800 cursor-pointer px-4 py-2 rounded-lg font-semibold hover:opacity-90 flex items-center gap-x-1.5 w-fit ${props.className}`}
      onClick={props.onClick}
      disabled = {props.disabled ? true : false}
      id={props.id}
    >
      {props.value} {props.icon}
    </button>
  );
}

function Bicon(props) {
  return (
    <button
      aria-checked={props.ariaChecked}
      type= {props.type}
      aria-label={props.title}
      title={props.title}
      className={`cursor-pointer ${props.className}`}
      onClick={props.onClick}
      id={props.id}
    >
      {props.icon}
    </button>
  );
}

export default Button;
export {Bicon};
