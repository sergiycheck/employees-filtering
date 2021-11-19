import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectUserIds, selectUserById, toggleUser, UserData } from "./usersSlice";
import classNames from "classnames";

const UserList = () => {
  const userIds = useAppSelector(selectUserIds) as string[];

  const renderedListItems = userIds.map((userId) => {
    return <UserListItem key={userId} id={userId} />;
  });

  return (
    <React.Fragment>
      <ul className="users-list">{renderedListItems}</ul>
    </React.Fragment>
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
    setUserActive(user?.toggled ? true : false);
  }, [user]);

  return (
    <li>
      <div className="userContainer">
        <h4 className={classNames(userActive && "userActive")}>
          {user.firstName} {user.lastName}
        </h4>

        <div>
          <p>{user.toggled && "active"}</p>
          <p>{!user.toggled && "not active"}</p>
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

export default UserList;
