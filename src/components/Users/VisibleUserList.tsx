import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";
import { RootState } from "../../app/store";
import { UserList } from "./UserList";
import { alphabetFilterTypes } from "./../FilterElements/alpabetFilterTypes";
import { selectUserIdsByLettersFilter } from "./usersSlice";

type MatchParams = {
  filter: string;
};

export const mapStateToProps = (state: RootState, props: RouteComponentProps<MatchParams>) => {
  const { match } = props;
  let filter = match.params.filter || alphabetFilterTypes.all;

  let normalizedFilter = filter
    .split("")
    .map((c) => c.toLocaleLowerCase())
    .join("") as string;

  return {
    userFilteredKeyedIds: selectUserIdsByLettersFilter(state, normalizedFilter),
  };
};

const connector = connect(mapStateToProps);

export type PropsFromReduxForUserList = ConnectedProps<typeof connector>;

const connectorWithRouter = withRouter(connector(UserList));

export default connectorWithRouter;
