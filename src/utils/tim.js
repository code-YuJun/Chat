// IM sdk 注册
import TIM from 'tim-js-sdk';
import TIMUploadPlugin from 'tim-upload-plugin';
import TIMProfanityFilterPlugin from 'tim-profanity-filter-plugin';
let options = {
  SDKAppID: 1400787156 // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
};
// 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
let tim = TIM.create(options); // SDK 实例通常用 tim 表示
tim.setLogLevel(1); // 0 普通级别，日志量较多 1release 级别，SDK 输出关键信息，
// IM 上传插件
tim.registerPlugin({'tim-upload-plugin': TIMUploadPlugin});
// IM 本地审核插件
tim.registerPlugin({ 'tim-profanity-filter-plugin': TIMProfanityFilterPlugin });

// SDK 进入 ready 状态时触发，接入侧监听此事件，然后可调用 SDK 发送消息等 API，使用 SDK 的各项功能
let onSdkReady = function(event) {
  let message = tim.createTextMessage({ to: 'user1', conversationType: 'C2C', payload: { text: 'Hello world!' }});
  tim.sendMessage(message);
};
tim.on(TIM.EVENT.SDK_READY, onSdkReady);


// SDK 进入 not ready 状态时触发，此时接入侧将无法使用 SDK 发送消息等功能。如果想恢复使用，接入侧需调用 login 接口，驱动 SDK 进入 ready 状态
let onSdkNotReady = function(event) {
  // 如果想使用发送消息等功能，接入侧需驱动 SDK 进入 ready 状态，重新调用 login 接口即可，如下所示：
  // tim.login({userID: 'your userID', userSig: 'your userSig'});
};
tim.on(TIM.EVENT.SDK_NOT_READY, onSdkNotReady);


// SDK 收到推送的单聊、群聊、群提示、群系统通知的新消息，接入侧可通过遍历 event.data 获取消息列表数据并渲染到页面
let onMessageReceived = function(event) {
  // event.data - 存储 Message 对象的数组 - [Message]
};
tim.on(TIM.EVENT.MESSAGE_RECEIVED, onMessageReceived);


// SDK 收到消息被修改的通知，消息发送方可通过遍历 event.data 获取消息列表数据并更新页面上同 ID 消息的内容。
let onMessageModified = function(event) {
  // event.data - 存储被修改过的 Message 对象的数组 - [Message]
};
tim.on(TIM.EVENT.MESSAGE_MODIFIED, onMessageModified);


// SDK 收到消息被撤回的通知，可通过遍历 event.data 获取被撤回的消息列表数据并渲染到页面，如单聊会话内可展示为 "对方撤回了一条消息"；群聊会话内可展示为 "XXX撤回了一条消息"。
let onMessageRevoked = function(event) {
  // event.data - 存储 Message 对象的数组 - [Message] - 每个 Message 对象的 isRevoked 属性值为 true
};
tim.on(TIM.EVENT.MESSAGE_REVOKED, onMessageRevoked);


// SDK 收到对端已读消息的通知，即已读回执。可通过遍历 event.data 获取对端已读的消息列表数据并渲染到页面，如单聊会话内可将己方发送的消息由“未读”状态改为“已读”。
let onMessageReadByPeer = function(event) {
  // event.data - 存储 Message 对象的数组 - [Message] - 每个 Message 对象的 isPeerRead 属性值为 true
};
tim.on(TIM.EVENT.MESSAGE_READ_BY_PEER, onMessageReadByPeer);


// 网络状态发生改变
let onNetStateChange = function (event) {
  // v2.5.0 起支持
  // event.data.state 当前网络状态，枚举值及说明如下：
  // TIM.TYPES.NET_STATE_CONNECTED - 已接入网络
  // TIM.TYPES.NET_STATE_CONNECTING - 连接中。很可能遇到网络抖动，SDK 在重试。接入侧可根据此状态提示“当前网络不稳定”或“连接中”
  // TIM.TYPES.NET_STATE_DISCONNECTED - 未接入网络。接入侧可根据此状态提示“当前网络不可用”。SDK 仍会继续重试，若用户网络恢复，SDK 会自动同步消息
};
tim.on(TIM.EVENT.NET_STATE_CHANGE, onNetStateChange);

export {
    TIM,tim
}