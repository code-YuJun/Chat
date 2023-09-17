// 会话组件
import { PureComponent } from "react";
import { SessionWrapper } from "./style";
import classNames from 'classnames'
import Author from "@/assets/img/author.png";
import User from "@/assets/img/user.png";
class Session extends PureComponent {
    render() {
        const {
            right, left, children
        } = this.props;
        const Img = left ? Author : User;
        console.log(right, left, children)
        return (
            <SessionWrapper>
                {right && (
                    <div className={classNames('rightSession','clearfix')}>
                        <div className="avatar">
                            <img src={User} />
                        </div>
                        <div className="rightContent">
                            {children}
                        </div>
                    </div>
                )}
                {left && (
                    <div className={classNames("leftSession","clearfix")}>
                        <div className="avatar">
                            <img src={Author} />
                        </div>
                        <div className="leftContent">
                            {children}
                        </div>
                    </div>
                )}
            </SessionWrapper>
        )
    }
}

export default Session;