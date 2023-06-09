import { PureComponent } from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "./style";
import { fetchLoginStateAction } from "@/store/login/login.js";
import logining from "@/assets/svg/logining.svg"
import loginFail from "@/assets/svg/loginFail.svg"
import logoPic from "@/assets/img/chat.png";
class Header extends PureComponent {
  componentDidMount() {
    this.props.toLogin();
  }
  render() {
    const { value } = this.props;
    return (
      <HeaderWrapper>
        <div className="Logo">
          <img src={logoPic} alt="logo" className="Logo_name"/>
        </div>
        <div className="Info">
          <div className="Info_Name">聊天窗口</div>
          <img src={ logining } className="Info_State"></img>
        </div>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  value: state.counter.value,
});
// 便利 redux 中的方法
const mapDispatchToProps = (dispatch) => ({
  toLogin() {
    dispatch(fetchLoginStateAction());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
