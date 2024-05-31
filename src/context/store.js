import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
