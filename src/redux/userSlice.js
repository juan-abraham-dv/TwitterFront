import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {}, // para no loguearse poner un objeto con info similar a un usario

  reducers: {
    storeUser(state, action) {
      //const loggedUserData = action.payload;
      console.log(current(state));
      console.log(action.payload);
      return { ...action.payload };
    },
  },
});

export const { storeUser } = userSlice.actions;
export default userSlice.reducer;
