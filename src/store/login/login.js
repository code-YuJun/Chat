import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginState: false
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeLoginState: (state, action) => {
      state.loginState = action.payload;
    },
  },
});

// 导出加减的方法
export const { changeLoginState } = loginSlice.actions;

// 默认导出
export default loginSlice.reducer;