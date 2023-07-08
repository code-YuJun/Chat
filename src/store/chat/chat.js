import { createSlice } from "@reduxjs/toolkit";
import { OrderedMap } from 'immutable';
export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    // 实时消息
    realTimeMessages: OrderedMap()
  },
  // 同步 reducer
  reducers: {
    // 客户端发送消息添加
    sendMessage(state, { payload }) {
      state.realTimeMessages.set(payload.id, payload)
      console.log(state.realTimeMessages)
    },
    // 主要监听返回的消息
    // appendRealTimeMessage(state,action) {
    //   console.log('消息接收')
    //   // = action.payload;
    //   // state.realTimeMessages.set();
    // },
  },
});

// 导出 修改实时消息map 的方法
export const { sendMessage/*, appendRealTimeMessage*/ } = chatSlice.actions;
// 默认导出
export default chatSlice.reducer;
