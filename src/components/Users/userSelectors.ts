import { RootState } from "../../app/store";
import { selectUsers, selectSelectedLettersFilter, UserIdsFiltered, UserData } from "./usersSlice";
import { months, getMonthName } from "./sharedConsts";

export const selectUserIdsByLettersFilter = (state: RootState) => {
  const users = selectUsers(state);
  const filter = selectSelectedLettersFilter(state);

  if (!filter) {
    const allUserIds = users.map((u) => u.id);
    const allUserIdsFiltered: UserIdsFiltered = {
      all: allUserIds,
    };
    return allUserIdsFiltered;
  }

  const reducedUserIds = filter.split("").reduce((prev, curr) => {
    const filteredUserIds = users
      .filter((u) => u.firstName.toUpperCase().startsWith(curr.toUpperCase()))
      .map((u) => u.id);

    prev[curr] = filteredUserIds;

    return prev;
  }, {} as UserIdsFiltered);

  return reducedUserIds;
};

const currentMonth = new Date().getMonth();
export const selectActiveGroupedFilteredUserIds = (state: RootState) => {
  const activeUsers = selectUsers(state).filter((u) => u.isActive);

  type UsersFiltered = {
    [key: string]: UserData[];
  };

  const usersGroupedByMonth = activeUsers.reduce((prev, curr) => {
    const month = getMonthName(curr.dob);
    if (!prev[month]) {
      prev[month] = [];
    }
    prev[month].push(curr);
    return prev;
  }, {} as UsersFiltered);

  const userGroupByMonthFilteredByLastName = Object.entries(usersGroupedByMonth).reduce((prev, curr) => {
    const [key, valueArr] = curr;

    prev[key] = valueArr.sort((u1, u2) => u1.lastName.toLowerCase().localeCompare(u2.lastName.toLowerCase()));

    return prev;
  }, {} as UsersFiltered);

  const userGroupByMonthFilteredByLastNameKeysSorted = Object.fromEntries(
    Object.entries(userGroupByMonthFilteredByLastName).sort((data1, data2) => {
      const [key1] = data1;
      const [key2] = data2;
      let monthIndex1 = months.indexOf(key1);
      let monthIndex2 = months.indexOf(key2);
      if (monthIndex1 < currentMonth) monthIndex1 += 12;
      if (monthIndex2 < currentMonth) monthIndex2 += 12;
      return monthIndex1 - monthIndex2;
    })
  );

  const userIdsGroupByMonthFilteredByLastNameKeysSorted = Object.entries(
    userGroupByMonthFilteredByLastNameKeysSorted
  ).reduce((prev, curr) => {
    const [key, valueArr] = curr;
    prev[key] = valueArr.map((u) => u.id);
    return prev;
  }, {} as UserIdsFiltered);

  return userIdsGroupByMonthFilteredByLastNameKeysSorted;
};
