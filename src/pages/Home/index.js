import clsx from 'clsx'
import styles from './Home.module.scss'

function Home(){
    return (
        <div className={clsx(styles.home)}>
            Home page
        </div>
    )
}

export default Home