import { PureComponent } from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "./style";
import { fetchLoginStateAction } from "@/store/login/login.js";
import Author from "@/assets/img/author.png"
import logining from "@/assets/svg/logining.svg"
import loginFail from "@/assets/svg/loginFail.svg"
class Header extends PureComponent {
  componentDidMount() {
    this.props.toLogin();
  }
  render() {
    const { loginState } = this.props;
    return (
      <HeaderWrapper>
        <div className="Head">
          <div className="Head__left">
            <div className="Head__left--img">
              <img src={Author}/>
            </div>
            <div className="Head__left--info">
              <div className="text">
                <span>IM窗口</span>
                <img src={loginState ? logining : loginFail} className="state"></img>
              </div>
              <span className="description">客服系统前端</span>
            </div>
          </div>
          <div className="Head__right">
            <div className="line"></div>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  loginState: state.login.loginState,
});
// 便利 redux 中的方法
const mapDispatchToProps = (dispatch) => ({
  toLogin() {
    dispatch(fetchLoginStateAction());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
