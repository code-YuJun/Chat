import { PureComponent } from "react";
import {
  Editor,
  EditorState,
  // CompositeDecorator,
  // Modifier,
  // getDefaultKeyBinding,
  // ContentState,
} from "draft-js";
import { tim, TIM } from "@/utils/tim.js";

// const emojiDecorator = new CompositeDecorator([
//   {
//       strategy: handleEmojiStrategy,
//       component: Emoji,
//   },
// ]);

class DEditor extends PureComponent {
  state = {
    sendDisabled: false, // 是否禁用
    inputBoxText: "输入聊天内容",
    editorState: EditorState.createEmpty(), // 编辑器的状态
  };
  fun() {
    // 1. 创建消息实例
    let message = tim.createTextMessage({
      to: "1400787156",
      conversationType: TIM.TYPES.CONV_C2C, // 端到端
      // 消息优先级，用于群聊（v2.4.2起支持）。如果某个群的消息超过了频率限制，后台会优先下发高优先级的消息，详细请参考：https://cloud.tencent.com/document/product/269/3663#.E6.B6.88.E6.81.AF.E4.BC.98.E5.85.88.E7.BA.A7.E4.B8.8E.E9.A2.91.E7.8E.87.E6.8E.A7.E5.88.B6)
      // 支持的枚举值：TIM.TYPES.MSG_PRIORITY_HIGH, TIM.TYPES.MSG_PRIORITY_NORMAL（默认）, TIM.TYPES.MSG_PRIORITY_LOW, TIM.TYPES.MSG_PRIORITY_LOWEST
      // priority: TIM.TYPES.MSG_PRIORITY_NORMAL,
      payload: {
        text: "新消息",
      },
      // v2.20.0起支持C2C消息已读回执功能，如果您发消息需要已读回执，需购买旗舰版套餐，并且创建消息时将 needReadReceipt 设置为 true
      needReadReceipt: true,
      // 消息自定义数据（云端保存，会发送到对端，程序卸载重装后还能拉取到，v2.10.2起支持）
      // cloudCustomData: 'your cloud custom data'
    });

    // 2. 发送消息
    let promise2 = tim.sendMessage(message);
    promise2
      .then(function (imResponse) {
        // 发送成功
        console.log(imResponse);
      })
      .catch(function (imError) {
        // 发送失败
        console.warn("sendMessage error:", imError);
      });
  }
  handleEditorEnter = () => {
    console.log("点击发送消息");
  };
  handleEditorChange = (editorState) => {
    console.log("修改内容")
    const editorContent = editorState.getCurrentContent();
    const text = editorContent.getPlainText();
    console.log(text)
  }
  render() {
    const { inputBoxText, sendDisabled, editorState} = this.state;
    return (
      <div>
        <Editor
          ref={this.editor}
          editorState={editorState}
          onChange={this.handleEditorChange}
          // onFocus={this.handleQuestionShow}
          // handleKeyCommand={this.handleKeyCommand}
          // keyBindingFn={keyBindFn}
          placeholder={inputBoxText}
        />
        <button
          onClick={this.handleEditorEnter}
          disabled={sendDisabled}
          // className={styles.SendButton}
        >
          发送
        </button>
      </div>
    );
  }
}
export default DEditor;
