import { PureComponent } from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "./style";
import { fetchLoginStateAction } from "@/store/login/login.js";
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
        <div className="Info">
          <div className="Info_Name">聊天窗口</div>
          <div className="login_info">
            <img src={ loginState ? logining : loginFail } className="Info_State"></img>
            <span className="login_info">{loginState ? '在线' : '离线'}</span>
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
