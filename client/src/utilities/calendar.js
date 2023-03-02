import { parseISO, format } from "date-fns";

export const getEventsByDayNumber = (currentDay, allEvents) => {
  if (!allEvents.length) return [];

  return allEvents.filter(event => {
    const isoDate = parseISO(event.startAt);
    const day = format(isoDate, "d"); // '2'
    return currentDay === Number(day);
  });
};

export const formatToLocalTime = date => {
  const isoDate = parseISO(date);
  return format(isoDate, "p");
};

/**
 * Convert date and time from a form to Javascript timestamp
 * @param {string} date 'yyyy-mm-dd'
 * @param {string} time 'hh:mm'
 * @returns {Date}
 */
export const dateToTimestamp = (date, time) =>
  new Date(`${date}T${time}`).getTime();
