import { PureComponent } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { HeaderWrapper } from "./style";
// import { increment } from "@/store/festures/counterSlice.js";
import { fetchLoginStateAction } from "@/store/login/login.js";
class Header extends PureComponent {
  componentDidMount(){
    this.props.toLogin()
  }
  render() {
    const { value } = this.props;
    return (
      <HeaderWrapper>
        <div className="Logo">
          <img src="" />
        </div>
        <div className="Info">
          <div className="Name">聊天窗口</div>
          <div className="State">
            {/* <svg>
              <use xlink:href=""></use>
            </svg> */}
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = () => {};
// 便利 redux 中的方法
const mapDispatchToProps = (dispatch) => ({
  toLogin(){
    dispatch(fetchLoginStateAction())
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
