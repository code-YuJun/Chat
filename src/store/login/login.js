import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tim } from "@/utils/tim.js";
export const fetchLoginStateAction = createAsyncThunk(
  "fetch/loginState",
  async () => {
    return tim.login({
      userID: "user1",
      userSig:
        "eJwtzFELgjAYheH-sttCvsk2TegqaAQlZCuqO2Erv0odm1kQ-fdMvTzPgfdD1HoXtMaRhIQBkGm-UZuqwQv2-PTG0fHw*p5bi5oklAFEcUS5GB7ztuhM55zzEAAGbbD8m4h5FAMDOlbw2nXZRB4KuSiUL2eVSOvN-mhsdZbZaZmq8CHqV3aTban1ajsn3x8ZYDGP",
    });
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginState: false,
  },
  // 同步 reducer
  reducers: {
    changeLoginState: (state, action) => {
      state.loginState = action.payload;
    },
  },
  // 异步 reducer(监听异步 action 请求后，修改redux数据)
  extraReducers: {
    [fetchLoginStateAction.pending](state, action) {
      //  请求loading效果
      console.log("请求中");
    },
    [fetchLoginStateAction.fulfilled](state, action) {
      state.loginState = true;
    },
    // 登录失败处理
    [fetchLoginStateAction.rejected](state, action) {
      state.loginState = false;
    },
  },
});

// 导出加减的方法
export const { changeLoginState } = loginSlice.actions;

// 默认导出
export default loginSlice.reducer;
