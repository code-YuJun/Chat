# 聊天窗口
## 介绍
这是一个聊天窗口，react 和 socket.io 开发，虽然用了 react18，但是还是选择了class组件的方式。
项目npm用了淘宝镜像:
npm config set registry https://registry.npm.taobao.org

## 诞生时间
2023 - 06 - 03

## 对接聊天
先对接 腾讯 IM
系统网站：https://console.cloud.tencent.com/im/detail
文档网站：https://cloud.tencent.com/document/product/269

## 项目接入 sdk 
```bash
// IM Web SDK
// 从v2.11.2起，SDK 支持了 WebSocket，推荐接入；v2.10.2及以下版本，使用 HTTP
npm install tim-js-sdk --save
// 发送图片、文件等消息需要腾讯云即时通信 IM 上传插件
npm install tim-upload-plugin --save
// 拦截或替换敏感词需要本地审核插件
npm install tim-profanity-filter-plugin --save
```

## sdk 使用事项
1. 登录之后才可以用 sdk 
2. 登录的 userSig 可以在这里生成
![avatar](https://pic.imgdb.cn/item/647af95ef024cca173e1e551.png)
，或者可以用函数生成的方式：
```javascript
// es
import LibGenerateTestUserSig from './lib-generate-test-usersig-es.min.js';
// umd
// import * as LibGenerateTestUserSig from './lib-generate-test-usersig-umd.min.js';

/**
 * Signature expiration time, which should not be too short
 * Time unit: second
 * Default time: 7 * 24 * 60 * 60 = 604800 = 7days
 *
 * 签名过期时间，建议不要设置的过短
 * 时间单位：秒
 * 默认时间：7 x 24 x 60 x 60 = 604800 = 7 天
 */
const EXPIRETIME = 604800;

/**
 * Module: GenerateTestUserSig
 *
 * Description: Generates UserSig for testing. UserSig is a security signature designed by Tencent Cloud for its cloud services.
 * It is calculated based on `SDKAppID`, `UserID`, and `EXPIRETIME` using the HMAC-SHA256 encryption algorithm.
 *
 * Attention: For the following reasons, do not use the code below in your commercial application.
 *
 * The code may be able to calculate UserSig correctly, but it is only for quick testing of the SDK’s basic features, not for commercial applications.
 * `SECRETKEY` in client code can be easily decompiled and reversed, especially on web.
 * Once your key is disclosed, attackers will be able to steal your Tencent Cloud traffic.
 *
 * The correct method is to deploy the `UserSig` calculation code and encryption key on your project server so that your application can request from your server a `UserSig` that is calculated whenever one is needed.
 * Given that it is more difficult to hack a server than a client application, server-end calculation can better protect your key.
 *
 * Reference: https://cloud.tencent.com/document/product/647/17275#Server
 *
 *
 * Module:   GenerateTestUserSig
 *
 * Function: 用于生成测试用的 UserSig，UserSig 是腾讯云为其云服务设计的一种安全保护签名。
 *           其计算方法是对 SDKAppID、UserID 和 EXPIRETIME 进行加密，加密算法为 HMAC-SHA256。
 *
 * Attention: 请不要将如下代码发布到您的线上正式版本的 App 中，原因如下：
 *
 *            本文件中的代码虽然能够正确计算出 UserSig，但仅适合快速调通 SDK 的基本功能，不适合线上产品，
 *            这是因为客户端代码中的 SECRETKEY 很容易被反编译逆向破解，尤其是 Web 端的代码被破解的难度几乎为零。
 *            一旦您的密钥泄露，攻击者就可以计算出正确的 UserSig 来盗用您的腾讯云流量。
 *
 *            正确的做法是将 UserSig 的计算代码和加密密钥放在您的业务服务器上，然后由 App 按需向您的服务器获取实时算出的 UserSig。
 *            由于破解服务器的成本要高于破解客户端 App，所以服务器计算的方案能够更好地保护您的加密密钥。
 *
 * Reference：https://cloud.tencent.com/document/product/647/17275#Server
 */

function genTestUserSig(options) {
  const { SDKAppID, secretKey, userID } = options;
  const generator = new LibGenerateTestUserSig(SDKAppID, secretKey, EXPIRETIME);
  const userSig = generator.genTestUserSig(userID);
  return {
    SDKAppID,
    userSig,
  };
}

export { genTestUserSig, EXPIRETIME };
```
## 项目流程
1. 先启动 IM 系统
2. 启动当前项目 https://studyfe.gitee.io/tencent-im 该项目已经放在 gitpage 了 user ID是（1400787156）

## 项目中的工具包
1. classnames
使用说明：https://www.cnblogs.com/suihang/p/10417755.html

## 文档
react-redux: https://cn.react-redux.js.org
redux-toolkit: https://cn.redux-toolkit.js.org/

## 输入框编辑器
Draft.js 中文文档: https://github.com/mqyqingfeng/draft-js-doc-translation
github官方文档: https://github.com/facebookarchive/draft-js
### 富文本编辑器属性
#### editorState
editorState是一个在富文本编辑器中用于表示编辑器状态的对象。
它包含了编辑器中的文本内容、光标位置、选中文本等信息。通过操作editorState对象，可以实现对编辑器内容的修改、插入、删除等操作。

在富文本编辑器中，通常使用第三方库（如Draft.js）来管理editorState对象。这些库提供了一系列API和方法，用于创建、更新和获取editorState对象，以及对编辑器内容进行操作。

通过使用editorState对象，可以实现以下功能：
1. 获取编辑器中的文本内容：通过调用editorState对象的方法，可以获取编辑器中的文本内容，以便进行保存或其他处理。
2. 修改编辑器中的文本内容：通过调用editorState对象的方法，可以对编辑器中的文本内容进行修改，例如插入、删除、替换文本等操作。
3. 控制光标位置和选中文本：通过调用editorState对象的方法，可以控制光标的位置和选中文本的范围，以便进行精确的编辑操作。
4. 格式化文本样式：通过调用editorState对象的方法，可以对编辑器中的文本样式进行设置，例如字体、字号、颜色、对齐方式等。
5. 处理编辑器中的实体和块级元素：通过调用editorState对象的方法，可以处理编辑器中的实体（如链接、图片等）和块级元素（如标题、段落等）。
总的来说，editorState对象在富文本编辑器中起到了管理和控制编辑器状态的作用，通过对editorState对象的操作，可以实现对编辑器内容的修改和管理。

## 项目引入 RTK
1. 安装依赖
```bash
npm i @reduxjs/toolkit react-redux
```
2. 创建一个 reducer
```javascript
import { createSlice } from '@reduxjs/toolkit';
// 初始值
const initialState = {
  value: 0,
  title: "redux toolkit pre"
};
// 创建一个 Slice 
export const counterSlice = createSlice({
  name: 'counter',
  // 初始值
  initialState,
  // 定义 reducers 并生成关联的操作，相当于之前的reducer函数
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// 默认导出
export default counterSlice.reducer;
```
3. 创建 store 对象
```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice.js";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice
  },
});

export default store;
```
4. 在 index.js 中使用 react-redux 将 redux 和 组件关联
```javascript
import { Provider } from 'react-redux';
import store from '@/store/index.js';
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
5. 在组件中使用变量
```javascript
import { PureComponent } from 'react';
import { connect } from 'react-redux';
class Header extends PureComponent {
    render() {
        const { value } = this.props
        return (
            <span>{value}</span>
        );
    }
}
const mapStateToProps = (state) => ({
    value: state.counter.value
})
export default connect(mapStateToProps)(Header);
```
6. 在组件中修改 redux 中的变量
在 redux 中将 action 导出
```javascript
// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;
```
在组件中 dispatch 调用 action
```javascript
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { increment } from '@/store/festures/counterSlice.js'
class Header extends PureComponent {
    increment() {
        this.props.increment()
    }
    render() {
        const { value } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={e => this.increment()}>点击操作</button>
            </div>
        );
    }
}
// 遍历 redux 中的变量
const mapStateToProps = (state) => ({
    value: state.counter.value
})
// 便利 redux 中的方法
const mapDispatchToProps = (dispatch) => ({
    increment() {
        // increment() 返回值是一个 action 对象 {payload: ***, type: "counter/increment"}
        dispatch(increment())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
```
## 使用 RTK 创建异步 action
redux 中需要的数据，最好是在 redux 中去请求，而不是在页面或组件中请求。
@reduxjs/toolkit 已经集成了 react-thunk
1. 在 redux 中创建 异步action
```javascript
export const fetchLoginStateAction = createAsyncThunk("fetch/loginState",async () => {
  // 在页面中 dispatch 之后，会有三种状态
  // const res = axios.get("***")
  // return res.data   这里返回的 res.data 会
})
```
2. 页面中引入 异步action
```javascript
import { fetchLoginStateAction } from "@/store/login/login.js";
class Header extends PureComponent {
  componentDidMount(){
    this.props.toLogin()
  }
}
// 便利 redux 中的方法
const mapDispatchToProps = (dispatch) => ({
  toLogin(){
    dispatch(fetchLoginStateAction())
  }
});
```
执行 dispatch(fetchLoginStateAction()) 的时候，才执行 createAsyncThunk 中的异步函数
```javascript
async () => {
  // 在页面中 dispatch 之后，会有三种状态
  const res = axios.get("***")
  return res.data   // 这里返回的 res.data 会
}
```
3. 异步 Reducers 中监听 异步 action 请求 return 出来的值的状态
```javascript
   extraReducers:{
    [fetchLoginStateAction.pending](state,action){

    },
    [fetchLoginStateAction.fulfilled](state,action){
      // const { state } = action.payload.data
      // state.loginState = state
    },
    [fetchLoginStateAction.rejected](state,action){

    }
   }
```
