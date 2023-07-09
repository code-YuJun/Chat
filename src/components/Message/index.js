import { PureComponent } from "react";
import { MessageWrapper } from "./style";
import { connect } from "react-redux";
// 导入 action
import { listenRealTimeMessage } from "@/store/chat/chat.js";
import { TIM, tim } from "@/utils/tim.js";
// 导入各种类型的消息
import Text from "./Text";
class Message extends PureComponent {
  messageReceive = (event) => {
    // event.data - 存储 Message 对象的数组 - [Message]
    const messageList = event.data;
    messageList.forEach((message) => {
      if (message.type === TIM.TYPES.MSG_TEXT) {
        // 文本消息 - https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.TextPayload
        this.props.listenRealTimeMessage(message);
      }
    });
  };
  componentDidMount() {
    tim.on(TIM.EVENT.MESSAGE_RECEIVED, this.messageReceive);
  }
  render() {
    let { realTimeMessages } = this.props;
    return (
      <MessageWrapper>
        {realTimeMessages.map((message, index) => {
          const { from, type } = message;
          let left;
          let right;
          let html = null;
          if (from === "in") {
            right = true;
          }
          if (from === "out") {
            left = true;
          }
          if (type === TIM.TYPES.MSG_TEXT) {
            html = <Text message={message} right={right} left={left} />;
          }
          return <div key={index}>{html}</div>
        })}
      </MessageWrapper>
    );
  }
}
// 将 redux 中的变量遍历到 props 中
const mapStateToProps = (state) => ({
  realTimeMessages: state.chat.realTimeMessages,
});
// 使用 redux 中定义的 action 方法
const mapDispatchToProps = (dispatch) => ({
  listenRealTimeMessage(state) {
    dispatch(listenRealTimeMessage(state));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Message);
