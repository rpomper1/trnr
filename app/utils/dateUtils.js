import moment from "moment";
export function formatDate(date) {
  return moment(date).format("MMM Do YYYY");
}
export function getTodaysDate() {
  return moment(new Date()).format("dddd, MMM Do YYYY");
}
