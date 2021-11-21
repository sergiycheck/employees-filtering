import { createAsyncThunk, createSlice, PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { usersUrl } from "./sharedConsts";

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;

  isActive?: boolean;
}

type entityUser = {
  [id: string]: UserData;
};

export type UserIdsFiltered = {
  [key: string]: string[];
};

const usersAdapter = createEntityAdapter<UserData>({
  sortComparer: (u1, u2) => {
    if (!u1.firstName || !u2.firstName) debugger;
    return u1.firstName.localeCompare(u2.firstName);
  },
});

const initialState = usersAdapter.getInitialState({
  maxLettersSelected: 3,
  selectedLettersFilter: "",
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(`${usersUrl}`);
  const responseJson = (await response.json()) as UserData[];
  return responseJson;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    concatRemoveLetterFilter: (state, action: PayloadAction<string>) => {
      const oneLetter = action.payload;
      const oneLetterNorm = oneLetter.toLowerCase();
      const { selectedLettersFilter } = state;

      if (!selectedLettersFilter) {
        state.selectedLettersFilter = oneLetter;
        return;
      }

      if (selectedLettersFilter.includes(oneLetterNorm)) {
        state.selectedLettersFilter = selectedLettersFilter
          .split("")
          .filter((l) => l !== oneLetterNorm)
          .join("");
        return;
      }
      if (state.selectedLettersFilter.length === state.maxLettersSelected) return;

      state.selectedLettersFilter = selectedLettersFilter.concat(oneLetter);
    },
    toggleUser: (state, action: PayloadAction<{ id: string; activity: boolean }>) => {
      const { id, activity } = action.payload;
      const user = state.entities[id];
      if (user) user.isActive = activity;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const users = action.payload;

      const newEntities: entityUser = {};
      users.forEach((dataUser: UserData) => {
        newEntities[dataUser.id] = dataUser;
      });
      usersAdapter.upsertMany(state, newEntities);
    });
  },
});
export const { concatRemoveLetterFilter, toggleUser } = usersSlice.actions;

export const selectSelectedLettersFilter = (state: RootState) => state.users.selectedLettersFilter;
export const selectMaxLettersSelected = (state: RootState) => state.users.maxLettersSelected;

export const {
  selectAll: selectUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export default usersSlice.reducer;
