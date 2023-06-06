import { tim, TIM } from "@/utils/tim.js";
import Editor from '@/components/Editor';
import Header from '@/components/Header';
import Message from '@/components/Message';

function App() {
  // 登录
  let promise = tim.login({
    userID: "user1",
    userSig:
      "eJwtzFELgjAYheH-sttCvsk2TegqaAQlZCuqO2Erv0odm1kQ-fdMvTzPgfdD1HoXtMaRhIQBkGm-UZuqwQv2-PTG0fHw*p5bi5oklAFEcUS5GB7ztuhM55zzEAAGbbD8m4h5FAMDOlbw2nXZRB4KuSiUL2eVSOvN-mhsdZbZaZmq8CHqV3aTban1ajsn3x8ZYDGP",
  });
  promise
    .then(function (imResponse) {
      if (imResponse.data.repeatLogin === true) {
        // 标识帐号已登录，本次登录操作为重复登录。v2.5.1 起支持
        console.log(imResponse.data.errorInfo);
      }
    })
    .catch(function (imError) {
      console.warn("login error:", imError); // 登录失败的相关信息
    });

  const fun = () => {
    // 发送消息
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
  };
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Message />
        <Editor />
      </div>
      <button onClick={fun}>点击发送消息</button>
    </div>
  );
}

export default App;
