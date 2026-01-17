
export const getYearProgress = (date: Date = new Date()) => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = (date.getTime() - start.getTime()) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const totalDays = isLeapYear(date.getFullYear()) ? 366 : 365;
  const percentage = (dayOfYear / totalDays) * 100;
  const daysLeft = totalDays - dayOfYear;

  return {
    dayOfYear,
    totalDays,
    percentage: parseFloat(percentage.toFixed(1)),
    daysLeft
  };
};

export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
