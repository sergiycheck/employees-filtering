const domainName = `https://yalantis-react-school-api.yalantis.com`;
const apiUrl = `${domainName}/api`;
export const usersUrl = `${apiUrl}/task0/users`;

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonthName = (date: string) => months[new Date(date).getMonth()];
