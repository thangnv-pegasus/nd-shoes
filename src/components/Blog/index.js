import styles from './Blog.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faRightLong, faUser } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Blog({ blog }) {
    return (
        <div className={cx('blog')}>
            <div className={cx('blog-img')}
                style={{ backgroundImage: `url(${blog.url})` }}
            ></div>
            <Link to="" className={cx('blog-title')}>
                {blog.title}
            </Link>
            <div className={cx('blog-time')}>
                <div className={cx('blog-author')}>
                    <span> <FontAwesomeIcon icon={faUser} /> </span> {blog.author}
                </div>
                <div className={cx('blog-date')}>
                    <span> <FontAwesomeIcon icon={faClock} />  </span> {blog.date}
                </div>
            </div>
            <div className={cx('blog-content')}>
                {blog.content[0]}
            </div>
            <Link to="" className={cx('go-to-detail')} >
                Xem thêm <span> <FontAwesomeIcon icon={faRightLong} /> </span>
            </Link>
        </div>
    )
}
export default Blog