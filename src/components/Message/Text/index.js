// 普通文本消息
import { PureComponent } from "react";
import { TextWrapper } from "./style";
// 接收的消息可能是图文形式的，但是目前发送不支持图文，所以将左右消息分开写
class LeftText extends PureComponent {
  render() {
    const { message } = this.props;
    const { text } = message.payload;
    return (
      <TextWrapper>
        <div className="left">
          <span>{text}</span>
        </div>
      </TextWrapper>
    );
  }
}
class RightText extends PureComponent {
  render() {
    const { message } = this.props;
    const { text } = message.payload;
    return(
      <TextWrapper>
        <div className="right">
          <span>{text}</span>
        </div>
      </TextWrapper>
    );
  }
}
class Text extends PureComponent {
  render() {
    const { right, left , message} = this.props;
    if (right) {
      return <RightText message={ message } />;
    }
    if (left) {
      return <LeftText message={ message } />;
    }
    return null;
  }
}
export default Text;
