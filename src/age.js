export function getEarthAge(year) {
  return new Date().getFullYear() - year;
}

export function getMercuryAge(age) {
  return Math.floor(age * 1.24);
}

export function getVenusAge(age) {
  return Math.floor(age * 5);
}