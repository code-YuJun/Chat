import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./festures/counterSlice.js";
import chatSlice from "./chat/chat.js"
import loginSlice from "./login/login.js";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice,
    login: loginSlice,
    chat: chatSlice
  },
  //关闭redux序列化检测
  middleware:getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:false
  })
});

export default store;