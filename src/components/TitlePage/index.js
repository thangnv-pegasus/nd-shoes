import classNames from "classnames/bind";
import styles from './TitlePage.module.scss'

const cx = classNames.bind(styles)

function TitlePage({ chidren }) {
    return (
        <div className={cx('title-page')}>
            <div className='grid wide'>
                {chidren}
            </div>
        </div>
    )
}

export default TitlePage