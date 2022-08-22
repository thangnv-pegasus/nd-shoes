import styles from './Logo.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

function Logo(){
    return (
        <Link to='/' className={clsx(styles.logo)}>
            <img src='https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/logo.png?1660294502239' alt="logo" />
        </Link>
    )
}


export default Logo