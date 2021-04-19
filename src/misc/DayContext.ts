const today = new Date();
export const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "thursday",
];
export let currentDay: string;
export let currentDayIndex: number;

if (today.getFullYear() === 2021 && today.getMonth() === 3) {
  switch (today.getDate()) {
    case 19:
      currentDay = "monday";
      currentDayIndex = 0;
      break;

    case 20:
      currentDay = "tuesday";
      currentDayIndex = 1;
      break;

    case 21:
      currentDay = "wednesday";
      currentDayIndex = 2;
      break;

    case 22:
      currentDay = "thursday";
      currentDayIndex = 3;
      break;

    case 23:
      currentDay = "friday";
      currentDayIndex = 4;
      break;

    default:
      currentDay = "monday";
      currentDayIndex = 0;
  }
} else {
  currentDay = "monday";
  currentDayIndex = 0;
}

export function isFuture(day: string) {
    const dayIndex = days.findIndex(currentDay => currentDay===day);
    if (dayIndex<=currentDayIndex) return false;
    else return true;
}

export function isPast(day: string) {
    const dayIndex = days.findIndex(currentDay => currentDay===day);
    if (dayIndex>=currentDayIndex) return false;
    else return true;
}
