import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],

  reducers: {
    storeUser(state, action) {
      const { loggedUserData } = action.payload;
      state.push(loggedUserData);
    },
  },
});

export const { storeUser } = userSlice.actions;
export default userSlice.reducer;
