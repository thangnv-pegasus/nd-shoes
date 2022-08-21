import styles from './Header.module.scss'
import clsx from 'clsx'

function Header(){
    return (
        <div className={clsx(styles.header)}>
            Header
        </div>
    )
}


export default Header

