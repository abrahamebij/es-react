function createTrim(param, max) {
  let arr = [];
  param = param.trim().split(","); // An array
  param.map((e) => {
    arr.push(e.trim());
  });
  arr = arr.filter((e) => {
    return e.length;
  });
  return arr.slice(0, max);
  // return arr.slice(0, max ? max : arr.length + 1);
}

function createAreaTrim(param) {
  let arr = [];
  param = param.trim().split(/\n/g); // An array
  param.map((e) => {
    arr.push(e.trim());
  });
  arr = arr.filter((e) => {
    return e.length;
  });
  return arr;
}

export default createTrim;
export { createAreaTrim };
