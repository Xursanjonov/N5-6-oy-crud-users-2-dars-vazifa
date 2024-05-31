import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addToUsers: (state, action) => {
      state.allUsers = [...state.allUsers, action.payload];
    },
    deleteToUser: (state, action) => {
      state.allUsers = state.allUsers?.filter(
        (user) => user.id !== action.payload.id
      );
    },
    updateToUser: (state, action) => {
      const index = state.allUsers?.findIndex(
        (el) => el.id === action.payload.id
      );
      state.allUsers.splice(index, 1, action.payload);
    },
  },
});

export const { addToUsers, deleteToUser, updateToUser } = usersSlice.actions;
export default usersSlice.reducer;
