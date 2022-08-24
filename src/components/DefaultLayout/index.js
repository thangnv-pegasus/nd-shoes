import Header from "./Header";
import Footer from "./Footer";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('content')}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout

