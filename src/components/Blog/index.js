import styles from './Blog.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faRightLong, faUser } from '@fortawesome/free-solid-svg-icons'
import routes from '../../routes'

const cx = classNames.bind(styles)

function Blog({ blog }) {
    return (
        <div className={cx('blog')}>
            <div className={cx('blog-img')}
                style={{ backgroundImage: `url(${blog.url})` }}
            ></div>
            <div className={cx('blog-infor')}>
                <Link to={`/blog/${blog.id}`} className={cx('blog-title')} onClick={() => window.scrollTo(0, 0)}>
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
                <Link to={routes.news} className={cx('go-to-detail')} onClick={() => window.scrollTo(0, 0)}>
                    Xem thêm <span> <FontAwesomeIcon icon={faRightLong} /> </span>
                </Link>
            </div>
        </div>
    )
}
export default Blog