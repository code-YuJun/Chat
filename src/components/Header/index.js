import { PureComponent } from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "./style";
// import { increment } from "@/store/festures/counterSlice.js";
import { fetchLoginStateAction } from "@/store/login/login.js";
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
          <img src={logoPic} alt="logo" />
        </div>
        <div className="Info">
          <div className="Name">聊天窗口</div>
          <div className="State">
            {/* <svg width={'10px'} height={'10px'} fill={'red'}>
              <use xlinkHref={"#loginFail"}></use>
            </svg> */}
          </div>
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
