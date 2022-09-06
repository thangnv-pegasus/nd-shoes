import styles from './NotFound.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function NotFound() {
    return (
        <div className={cx('notfound-page')}>
            <h2 className={cx('title')}>
                Server Error in '/' Application.
            </h2>
            <i>The resource cannot be found.</i>
            <div>
                <span>Description:</span>HTTP 404. The resource you are looking for (or one of its dependencies) could have been removed, had its name changed, or is temporarily unavailable.  Please review the following URL and make sure that it is spelled correctly.
            </div>
            <div>
                <span>Description:</span>HTTP 404. The resource you are looking for (or one of its dependencies) could have been removed, had its name changed, or is temporarily unavailable.  Please review the following URL and make sure that it is spelled correctly.
            </div>
        </div>
    )
}

export default NotFound