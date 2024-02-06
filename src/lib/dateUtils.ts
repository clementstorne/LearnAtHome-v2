import { DateTime } from "luxon";

export function formatDate(dateStr: string) {
  return DateTime.fromISO(dateStr).setLocale("fr").toFormat("cccc d/LL");
}

export function formatTime(dateStr: string) {
  return DateTime.fromISO(dateStr).setLocale("fr").toFormat("T");
}
