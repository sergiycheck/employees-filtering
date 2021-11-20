import React, { useMemo } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUserById, UserData, selectActiveGroupedFilteredUserIds } from "./usersSlice";
import { getMonthName } from "./sharedConsts";

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
    <div>
      <div className="employee-title">
        <h2>Employees birthday</h2>
      </div>
      <div>{renderedListItems}</div>
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
