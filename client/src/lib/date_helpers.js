const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

const locale = 'en-us';
export const month = currentDate.toLocaleString(locale, { month: 'long' });

const getDaysInMonth = (month, year) => {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
};

export const daysOfWeek = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
export const weeksInAMonth = [0, 1, 2, 3, 4];
export const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);
