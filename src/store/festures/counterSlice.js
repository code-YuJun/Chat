import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

// 创建一个 Slice 
export const counterSlice = createSlice({
  name: 'counter',
  // 初始值
  initialState,
  // 定义 reducers 并生成关联的操作，相当于之前的reducer函数
  reducers: {
    // 定义一个加的方法
    increment: (state, action) => {
      console.log(action)
      state.value += 1;
    },
    // 定义一个减的方法
    decrement: (state, action) => {
      console.log(action)
      state.value -= 1;
    },
  },
});
// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;

// 默认导出
export default counterSlice.reducer;