import styles from './DetailBlog.module.scss'
import classNames from 'classnames/bind'
import { Link, useParams } from 'react-router-dom'
import data from '../../data/db.json'
import TitlePage from '../../components/TitlePage'
import routes from '../../routes'

const cx = classNames.bind(styles)

const blogs = data.blogs

function DetailBlog() {

    const { blogId } = useParams()

    const thisBlog = blogs.find(blog => blog.id == blogId)

    return (
        <div className={cx('detail')}>
            <TitlePage chidren={thisBlog.title} />
            <div className='grid wide'>
                <div className={cx('detail-blog__section')}>
                    <div className='row'>
                        <div className={cx('order-1') + ' col l-3 m-12 c-12'}>
                            <div className={cx('similar-blogs')}>
                                <Link to={routes.news} className={cx('similar-title')} onClick={() => window.scrollTo(0, 0)}>
                                    Bài viết liên quan
                                </Link>
                                <div className={cx('list-blog')}>
                                    {
                                        blogs.map(blog => {
                                            return (
                                                <div className={cx('blog-item')} key={blog.id}>
                                                    <Link to={`/blog/${blog.id}`} className={cx('blog-img')} onClick={() => window.scrollTo(0, 0)}>
                                                        <img src={blog.url} />
                                                    </Link>
                                                    <Link to={`/blog/${blog.id}`} className={cx('blog-item__title')} onClick={() => window.scrollTo(0, 0)}>
                                                        {blog.title}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col l-9 m-12 c-12'>
                            <div className={cx('content-blog')}>
                                {
                                    thisBlog.content.map((text, index) => {
                                        return (
                                            <div className={cx('text')} key={index}>
                                                {text}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBlog