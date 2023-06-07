import { PureComponent } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { HeaderWrapper } from "./style";
import { increment } from "@/store/festures/counterSlice.js";
class Header extends PureComponent {
  increment() {
    this.props.increment();
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
            <svg>
              <use xlink:href=""></use>
            </svg>
          </div>
        </div>
        {/* <div className={classnames('class1', 'class2')}>显示{ value }</div>
                <button onClick={e => this.increment()}>点击操作</button> */}
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = () => {};
// 便利 redux 中的方法
const mapDispatchToProps = (dispatch) => ({
  increment() {
    // increment() 返回值是一个 action 对象 {payload: ***, type: "counter/increment"}
    dispatch(increment());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
