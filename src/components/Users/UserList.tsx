import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectUserById, toggleUser, UserData } from "./usersSlice";
import { PropsFromReduxForUserList } from "./VisibleUserList";

export const UserList = (props: PropsFromReduxForUserList) => {
  const { userFilteredKeyedIds } = props;

  const filteredKeys = Object.keys(userFilteredKeyedIds);

  const renderedListItems = filteredKeys.map((filteredKey, i) => {
    const userIds = userFilteredKeyedIds[filteredKey];

    const renderedUsers = userIds.map((userId) => {
      return <UserListItem key={userId} id={userId}></UserListItem>;
    });

    return (
      <div key={i}>
        <h3>{filteredKey.toUpperCase()}</h3>
        <ul className="users-list">
          {renderedUsers}
          {!renderedUsers.length && <h4>No Employees</h4>}
        </ul>
      </div>
    );
  });

  return (
    <div className="employees-container">
      <div className="employee-title">
        <h2>Employees</h2>
      </div>
      <div className="userLists">{renderedListItems}</div>
    </div>
  );
};

type UserListItemProps = {
  id: string;
};

const UserListItem = (props: UserListItemProps) => {
  const { id } = props;
  const dispatch = useAppDispatch();

  const [userActive, setUserActive] = useState(false);

  const user = useAppSelector((state) => {
    return selectUserById(state, id);
  }) as UserData;

  useEffect(() => {
    setUserActive(user?.isActive ? true : false);
  }, [user]);

  return (
    <li>
      <div className="userContainer">
        <h4 className={classNames(userActive && "userActive")}>
          {user.firstName} {user.lastName}
        </h4>

        <div>
          <p>{user.isActive && "active"}</p>
          <p>{!user.isActive && "not active"}</p>
        </div>

        <div className="activity">
          <div className="activityCheck">
            <input
              onChange={(e) => {
                dispatch(toggleUser({ id, activity: false }));
                setUserActive(false);
              }}
              type="radio"
              name={`${user.id}-activity`}
              id={`${user.id}-activeFalse`}
              checked={!userActive}
            />
            <label htmlFor={`${user.id}-activeFalse`}>not active</label>
          </div>

          <div className="activityCheck">
            <input
              onChange={(e) => {
                dispatch(toggleUser({ id, activity: true }));
                setUserActive(true);
              }}
              type="radio"
              name={`${user.id}-activity`}
              id={`${user.id}-activeTrue`}
              checked={userActive}
            />
            <label htmlFor={`${user.id}-activeTrue`}>active</label>
          </div>
        </div>
      </div>
    </li>
  );
};
