import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Title.module.scss'

const cx = classNames.bind(styles)

function Title({ children, to, slogan }) {
    if (to) {
        console.log(to)
        return (
            <div className={cx('section')}>
                <Link to={to} className={cx('link', 'title')}>
                    {children}
                </Link>
                <div className={cx('slogan')}>
                    {slogan}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={cx('section')}>
                <div className={cx('title')}>
                    {children}
                </div >
                <div className={cx('slogan')}>
                    {slogan}
                </div>
            </div>
        )
    }
}

export default Title