import classNames from "classnames/bind";
import styles from './FeedBack.module.scss'

const cx = classNames.bind(styles)

function FeedBack({ feedback }) {

    return (
        <div className={cx('feed-back')}
            style={{ backgroundImage: `url(${feedback.url})` }}
        >
            <div className={cx('content')}>
                <div className={cx('user-fb')}>
                    {feedback.name}
                </div>
                <div className={cx('comment')}>
                    {feedback.comment}
                </div>
            </div>
        </div>
    )
}

export default FeedBack