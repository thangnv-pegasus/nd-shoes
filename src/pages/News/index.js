import classNames from 'classnames/bind'
import styles from './News.module.scss'
import TitlePage from '../../components/TitlePage'
import data from '../../data/db.json'
import Blog from '../../components/Blog'

const cx = classNames.bind(styles)

const blogs = data.blogs

function News() {
    return (
        <div className={cx('news-page')}>
            <TitlePage chidren="Tin tức" />
            <div className='grid wide'>
                <div className='row'>
                    {
                        blogs.map(blog => {
                            return (
                                <div className='col l-4 m-4 c-12' key={blog.id}>
                                    <Blog blog={blog} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default News