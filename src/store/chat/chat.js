import { createSlice } from "@reduxjs/toolkit";
import { OrderedMap } from "immutable";
export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    // 实时消息
    realTimeMessages: OrderedMap(),
    // 历史消息
    historyMessages: OrderedMap(),
  },
  // 同步 reducer
  reducers: {
    appendRealTimeMessage(state, action) {
      // = action.payload;
      state.realTimeMessages.set();
    },
  },
});

// 导出 修改实时消息map 的方法
export const { changeLoginState } = chatSlice.actions;
// 默认导出
export default chatSlice.reducer;
