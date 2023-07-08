import { PureComponent } from "react";
import { MessageWrapper } from './style';
import { connect } from 'react-redux';
// 导入 action 
// import {  appendRealTimeMessage } from '@/store/chat/chat.js'
import { TIM, tim } from "@/utils/tim.js";
class Message extends PureComponent {
  constructor() {
    super()
  }
  render() {
    let onMessageReceived = function (event) {
      // event.data - 存储 Message 对象的数组 - [Message]
      const messageList = event.data;
      messageList.forEach((message) => {
        if (message.type === TIM.TYPES.MSG_TEXT) {
          // 文本消息 - https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.TextPayload
        } else if (message.type === TIM.TYPES.MSG_IMAGE) {
          // 图片消息 - https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.ImagePayload
        } else if (message.type === TIM.TYPES.MSG_FILE) {
          // 文件消息 - https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.FilePayload
        } else if (message.type === TIM.TYPES.MSG_LOCATION) {
          // 地理位置消息 - https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.LocationPayload
        } 
      });
    };
    tim.on(TIM.EVENT.MESSAGE_RECEIVED, onMessageReceived);

    return (
      <MessageWrapper>
      </MessageWrapper>
    )
  }
}
// 将 redux 中的变量遍历到 props 中
const mapStateToProps = (state) => ({
  // realTimeMessages: state.chat.realTimeMessages
})
// 使用 redux 中定义的 action 方法
const mapDispatchToProps = (dispatch) => ({
  // appendRealTimeMessage() {
  //     dispatch(appendRealTimeMessage())
  // }
})
export default connect(mapStateToProps,mapDispatchToProps)(Message);