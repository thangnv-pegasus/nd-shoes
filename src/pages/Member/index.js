import styles from './Member.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Member(){
    return (
        <div className={cx('member-page')}>
            Member Page
        </div>
    )
}

export default Member