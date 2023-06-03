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
2. 登录的 userSig 可以在这里生成 ![avatar](https://pic.imgdb.cn/item/647af95ef024cca173e1e551.png)，或者可以用函数生成的方式：
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
2. 启动当前项目 https://studyfe.gitee.io/tencent-im 该项目已经放在 gitpage 了