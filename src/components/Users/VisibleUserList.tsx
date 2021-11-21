import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { UserList } from "./UserList";
import { selectUserIdsByLettersFilter } from "./userSelectors";

export const mapStateToProps = (state: RootState) => {
  return {
    userFilteredKeyedIds: selectUserIdsByLettersFilter(state),
  };
};

const connector = connect(mapStateToProps);

export type PropsFromReduxForUserList = ConnectedProps<typeof connector>;

const connectorWithRouter = connector(UserList);

export default connectorWithRouter;
