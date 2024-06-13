export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}
export function limitDisplayedInteger(number, limit = 99) {
  return number > limit ? `${limit}+` : number;
}
