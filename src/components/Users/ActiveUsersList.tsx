import React, { useMemo } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUserById, UserData } from "./usersSlice";
import { getMonthName } from "./sharedConsts";
import { selectActiveGroupedFilteredUserIds } from "./userSelectors";

export const ActiveUserList = () => {
  const activeUserIds = useAppSelector((state) => selectActiveGroupedFilteredUserIds(state));

  const filteredMonthKeys = Object.keys(activeUserIds);
  const renderedListItems = filteredMonthKeys.map((filteredKey, i) => {
    const userIds = activeUserIds[filteredKey];

    const renderedUsers = userIds.map((userId) => {
      return <ActiveUserItem key={userId} id={userId}></ActiveUserItem>;
    });

    return (
      <div key={i}>
        <hr />
        <h3>{filteredKey.toUpperCase()}</h3>
        <ul className="users-list">
          {renderedUsers}
          {!renderedUsers.length && <h4>Employee list empty</h4>}
        </ul>
      </div>
    );
  });

  return (
    <div className="employees-birthdays">
      <div className="employee-title">
        <h2>Employees birthday</h2>
      </div>
      <div>
        {renderedListItems}
        {(!renderedListItems || !renderedListItems.length) && <h4>Employees List is empty</h4>}
      </div>
    </div>
  );
};

type ActiveUserItemProps = {
  id: string;
};

export const ActiveUserItem = (props: ActiveUserItemProps) => {
  const { id } = props;

  const user = useAppSelector((state) => {
    return selectUserById(state, id);
  }) as UserData;

  const formattedDateMemo = useMemo(
    function formattedDate() {
      const dateIso = user.dob;
      const date = new Date(dateIso);
      return `${date.getUTCDate()} ${getMonthName(dateIso)}, ${date.getFullYear()} year`;
    },
    [user]
  );

  return (
    <li>
      <div>
        <h4>
          {user.lastName} {user.firstName} - {formattedDateMemo}
        </h4>
      </div>
    </li>
  );
};
