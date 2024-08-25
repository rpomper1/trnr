import moment from "moment";
export function formatDate(date) {
  return moment(date).format("MMM Do YYYY");
}
export function getTodaysDate() {
  return moment(new Date()).format("dddd, MMM Do YYYY");
}
export function parseDateTimeFromTimezone(datetime) {
  const datetimePart = datetime.split("[")[0];
  const date = new Date(datetimePart);
  const isoString = date.toISOString();
  return isoString;
}
