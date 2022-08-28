import Header from "./Header";
import Footer from "./Footer";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function DefaultLayout({ children, setLogin, setThisAccount, thisAccount, login }) {
    return (
        <>
            <Header
                setLogin={setLogin}
                setThisAccount={setThisAccount}
                thisAccount = {thisAccount}
                login = {login}
            />
            <div className={cx('content')}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout

