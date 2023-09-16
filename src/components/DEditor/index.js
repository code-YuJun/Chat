import { PureComponent, createRef } from "react";
import { DEditorWrapper } from "./style";
import { connect } from 'react-redux';
// 导入 action 
import { sendMessage } from '@/store/chat/chat.js'
import Toolbar from "./Toolbar";
import {
  Editor,
  // 编辑器状态
  EditorState,
  getDefaultKeyBinding
} from "draft-js";
import { tim, TIM } from "@/utils/tim.js";
// 编辑器输入的时候会触发
const keyBindFn = (e) => {
  // 回车
  if (e.keyCode === 13 && !e.shiftKey) {
    return 'send-message';
  }
  return getDefaultKeyBinding(e);
};
class DEditor extends PureComponent {
  state = {
    sendDisabled: true, // 发送是否禁用
    inputBoxText: "输入聊天内容",
    // 初始化编辑器
    editorState: EditorState.createEmpty(),
  };
  editor = createRef();

  handleEditorEnter = () => {
    const { editorState } = this.state;
    const editorContent = editorState.getCurrentContent();
    const text = editorContent.getPlainText();
    // 发送消息
    // 1. 创建消息实例
    let message = tim.createTextMessage({
      to: "1400787156",
      conversationType: TIM.TYPES.CONV_C2C, // 端到端
      payload: {
        text,
      },
      needReadReceipt: true,
    });
    this.props.sendMessage(message)
    // 消息发送之后，清空输入框
    this.setState(
      {
        editorState: EditorState.createEmpty(),
        sendDisabled: true,
      },
      () => {
        this.editor.current.blur();
        this.editor.current.focus();
      }
    );
  };
  handleEditorChange = (editorState) => {
    const editorContent = editorState.getCurrentContent();
    const text = editorContent.getPlainText();
    this.setState({
      editorState,
      sendDisabled: text.trim().length === 0,
    });
  };
  // 自定义键盘事件
  handleKeyCommand = (command) => {
    if (command === 'send-message') {
      this.handleEditorEnter();
      return 'handled';
    }
    return 'not-handled';
  }
  render() {
    const { inputBoxText, sendDisabled, editorState } = this.state;
    return (
      <DEditorWrapper>
        <Toolbar />
        <Editor
          ref={this.editor}
          editorState={editorState}
          onChange={this.handleEditorChange}
          keyBindingFn={keyBindFn}
          handleKeyCommand={this.handleKeyCommand}
          placeholder={inputBoxText}
        />
        <button
          onClick={this.handleEditorEnter}
          disabled={sendDisabled}
          className="sendButton"
        >
          发送
        </button>
      </DEditorWrapper>
    );
  }
}
// 使用 redux 中定义的 action 方法
const mapDispatchToProps = (dispatch) => {
  return ({
    async sendMessage(state) {
      let sendMessageRes = await tim.sendMessage(state)
      if (sendMessageRes.code === 0) {
        dispatch(sendMessage(sendMessageRes.data.message))
      }
    }
  })
}
export default connect(null, mapDispatchToProps)(DEditor);
