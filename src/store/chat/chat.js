import { createSlice } from "@reduxjs/toolkit";
export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    // 实时消息
    realTimeMessages: []
  },
  // 同步 reducer
  reducers: {
    // 客户端发送消息添加
    sendMessage(state, { payload }) {
      state.realTimeMessages.push(payload)
    },
    // 监听返回的消息
    listenRealTimeMessage(state, { payload }) {
      state.realTimeMessages.push(payload)
    },
  },
});

// 导出 修改实时消息map 的方法
export const { sendMessage, listenRealTimeMessage } = chatSlice.actions;
// 默认导出
export default chatSlice.reducer;
