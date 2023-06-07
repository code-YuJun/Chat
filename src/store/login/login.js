import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchLoginStateAction = createAsyncThunk("fetch/loginState",async () => {
  // 在页面中 dispatch 之后，会有三种状态
  const res = axios.get("***")
  return res.data
})

export const loginSlice = createSlice({
  name: "login",
  initialState:{
    loginState: false
  },
  // 同步 reducer
  reducers: {
    changeLoginState: (state, action) => {
      state.loginState = action.payload;
    },
  },
  // 异步 reducer(监听异步 action 请求后，修改redux数据)
   extraReducers:{
    [fetchLoginStateAction.pending](state,action){

    },
    [fetchLoginStateAction.fulfilled](state,action){
      const { state } = action.payload.data
      state.loginState = state
    },
    [fetchLoginStateAction.rejected](state,action){

    }
   }
});

// 导出加减的方法
export const { changeLoginState } = loginSlice.actions;

// 默认导出
export default loginSlice.reducer;