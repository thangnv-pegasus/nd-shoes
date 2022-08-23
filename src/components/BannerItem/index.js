import className from 'classnames/bind'
import styles from './BannerItem.module.scss'

const cx = className.bind(styles)

function BannerItem({icon, title, slogan}){
    return (
        <div className={cx('banner-item')}>
            <div className={cx('icon')}>
                {icon} 
            </div>
            <div className={cx('title')}>
                {title}
            </div>
            <div className={cx('slogan')}>
                {slogan}
            </div>
        </div>
    )
}

export default BannerItem