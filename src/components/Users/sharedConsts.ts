const domainName = `https://fakerapi.it/api/v1`;

export const fakeUsers = `${domainName}/persons`;

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
