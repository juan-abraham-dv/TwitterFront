import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {}, // para no loguearse poner un objeto con info similar a un usario

  reducers: {
    storeUser(state, action) {
      console.log(current(state));
      console.log(action.payload);
      return { ...action.payload };
    },

    addFollowing(state, action) {
      const { followingList } = action.payload;
      const newState = {
        ...state,
        following: followingList,
      };

      return newState;
    },

    logout(state, action) {
      return {};
    },
  },
});

export const { storeUser, addFollowing, logout } = userSlice.actions;
export default userSlice.reducer;
