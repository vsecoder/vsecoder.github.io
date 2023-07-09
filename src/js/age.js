import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Europe/Moscow");

const today = dayjs();
const birthdateObj = dayjs(new Date("2006-03-28").getTime()).utc().tz();

export const myAge = Math.trunc(today.diff(birthdateObj, "year", true) * Math.pow(10, 3)) / Math.pow(10, 3);