export function dayDifference(date1: Date, date2: Date) {
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
}

export function capitalizeFirstLetter(string: string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
