function checkColor() {
  if (!localStorage.getItem("color")) {
    localStorage.setItem("color", 0);
  }
}

function changeColorTheme(props) {
  localStorage.setItem("color", props);
}

export default changeColorTheme;
export { checkColor };
