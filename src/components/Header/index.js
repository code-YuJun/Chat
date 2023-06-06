import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { increment } from '@/store/festures/counterSlice.js'
class Header extends PureComponent {
    increment() {
        this.props.increment()
    }
    render() {
        const { value } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={e => this.increment()}>点击操作</button>
            </div>
        );
    }
}
// 遍历 redux 中的变量
const mapStateToProps = (state) => ({
    value: state.counter.value
})
// 便利 redux 中的方法
const mapDispatchToProps = (dispatch) => ({
    increment() {
        // increment() 返回值是一个 action 对象 {payload: ***, type: "counter/increment"}
        dispatch(increment())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);