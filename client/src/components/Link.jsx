import { Link } from "react-router-dom";
function TextLink(props) {
  return (
    <Link
      to={props.href}
      target={props.external ? "_blank" : props.target}
      rel={props.external ? "noopener noreferrer" : props.rel}
      className={`hover:text-primary cursor-pointer ${props.className}`}
    >
      {props.value}
    </Link>
  );
}

function TextLinkUnderline(props) {
  return (
    <Link
      to={props.href}
      target={props.external ? "_blank" : props.target}
      rel={props.external ? "noopener noreferrer" : props.rel}
      className={`text-primary cursor-pointer hover:underline ${props.className}`}
    >
      {props.value}
    </Link>
  );
}

function Btn(props) {
  return (
    <Link
      to={props.href}
      target={props.external ? "_blank" : props.target}
      rel={props.external ? "noopener noreferrer" : props.rel}
      className={`bg-primary text-white dark:text-gray-800 cursor-pointer px-4 py-2 rounded-lg font-semibold hover:opacity-90 flex items-center gap-x-1.5 w-fit ${props.className}`}
    >
      {props.value} {props.icon}
    </Link>
  );
}

function Icon(props) {
  return (
    <Link
      to={props.href}
      target={props.external ? "_blank" : props.target}
      rel={props.external ? "noopener noreferrer" : props.rel}
      className={`text-primary duration-300 hover:opacity-80 cursor-pointer ${props.className}`}
    >
      {props.icon}
    </Link>
  );
}
// hover:-translate-x-[2px] hover:-translate-y-[1.5px]
function NavLink(props) {
  return (
    <li>
      <Link
        to={props.href}
        target={props.external ? "_blank" : props.target}
        rel={props.external ? "noopener noreferrer" : props.rel}
        className={`dark:text-white flex px-3 gap-x-8 items-center text-2xl sm:text-3xl hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg py-2 ${props.className}`}
        onClick={props.onClick}
      >
        <div className="hidden xxs:block dark:text-primary">{props.icon}</div>
        <span className="text-lg sm:text-xl">{props.value}</span>
        <div></div>
      </Link>
    </li>
  );
}

function ImgLink(props) {
  return (
    <Link
      to={props.href}
      target={props.external ? "_blank" : props.target}
      rel={props.external ? "noopener noreferrer" : props.rel}
      className={`${props.className}`}
    >
      <img
        src={props.src}
        alt={props.alt}
        loading={props.loading}
        className={`${props.imgClassName}`}
        onLoad={props.onLoad}
      />
    </Link>
  );
}

export default TextLink;
export { Icon, TextLinkUnderline, Btn, NavLink, ImgLink };
