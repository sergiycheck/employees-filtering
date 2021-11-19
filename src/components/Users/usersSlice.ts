import { createAsyncThunk, createSlice, PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
import { RootState } from "../../app/store";

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  toggled?: boolean;
}

type entityUser = {
  [id: string]: UserData;
};

const usersAdapter = createEntityAdapter<UserData>({
  sortComparer: (u1, u2) => u1.firstName.localeCompare(u2.firstName),
});
const initialState = usersAdapter.getInitialState({
  //entities
  //ids
  value: false,
});

export const fetchUsers = createAsyncThunk("onOff/fetchUsers", async (amount: number) => {
  const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`);
  const responseJson = (await response.json()) as UserData[];
  return responseJson;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setOnOffVal: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    toggleUser: (state, action: PayloadAction<{ id: string; activity: boolean }>) => {
      const { id, activity } = action.payload;
      const user = state.entities[id];
      if (user) user.toggled = activity;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const users = action.payload.slice(0, 5);

      const newEntities: entityUser = {};
      users.forEach((dataUser: UserData) => {
        newEntities[dataUser.id] = dataUser;
      });
      usersAdapter.upsertMany(state, newEntities);
    });
  },
});
export const { setOnOffVal, toggleUser } = usersSlice.actions;

export const selectOnOffVal = (state: RootState) => state.users.value;

export const {
  selectAll: selectUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export default usersSlice.reducer;
