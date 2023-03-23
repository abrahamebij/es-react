function days(num) {
  return Math.floor(Number(num) / (1000 * 60 * 60 * 24)) < 10
    ? "0" + Math.floor(Number(num) / (1000 * 60 * 60 * 24))
    : Math.floor(Number(num) / (1000 * 60 * 60 * 24));
}
function hrs(num) {
  return Math.floor((Number(num) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) <
    10
    ? "0" + Math.floor((Number(num) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    : Math.floor((Number(num) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}
function mins(num) {
  return Math.floor((Number(num) % (1000 * 60 * 60)) / (1000 * 60)) < 10
    ? "0" + Math.floor((Number(num) % (1000 * 60 * 60)) / (1000 * 60))
    : Math.floor((Number(num) % (1000 * 60 * 60)) / (1000 * 60));
}
function secs(num) {
  return Math.floor((Number(num) % (1000 * 60)) / 1000) < 10
    ? "0" + Math.floor((Number(num) % (1000 * 60)) / 1000)
    : Math.floor((Number(num) % (1000 * 60)) / 1000);
}

export { days, hrs, mins, secs };
