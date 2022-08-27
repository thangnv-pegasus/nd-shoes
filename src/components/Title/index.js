import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Title.module.scss'

const cx = classNames.bind(styles)

function Title({ children, to, slogan, whiteColor }) {
    if (to) {
        return (
            <div className={cx('section')}>
                <Link to={to} className={cx('link', 'title')} onClick={()=>window.scrollTo(0,0)}>
                    {children}
                    <div className={cx('title-before')}></div>
                    <div className={cx('title-after')}></div>
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
                <div className={cx('title')} style={whiteColor ? {
                    color: 'var(--white-color)'
                } : {}}
                >
                    {children}
                    <div className={cx('title-before')}
                        style={whiteColor ? {
                            background: 'var(--white-color)'
                        } : {}}
                    > </div>
                    <div className={cx('title-after')}
                        style={whiteColor ? {
                            background: 'var(--white-color)'
                        } : {}}
                    >
                    </div>
                </div >
                <div className={cx('slogan')} style={whiteColor ? { color: 'var(--white-color)' } : {}}>
                    {slogan}
                </div>
            </div>
        )
    }
}

export default Title