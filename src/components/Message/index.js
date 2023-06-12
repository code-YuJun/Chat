import { PureComponent } from "react";
import { TIM, tim } from "@/utils/tim.js";
class Message extends PureComponent {
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

    return <span>消息</span>;
  }
}
export default Message;