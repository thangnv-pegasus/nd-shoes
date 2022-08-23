import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Banner from '../../components/Banner'
import BannerItem from '../../components/BannerItem'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faGift, faPhone } from '@fortawesome/free-solid-svg-icons'
import Title from '../../components/Title'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('home')}>
            <Banner />
            <div className={cx('sub-banner')}>
                <div className='grid wide'>
                    <div className={cx('sub-banner__section')}>
                        <div className='row no-gutters'>
                            <div className='col c-3'>
                                <div className={cx('banner-item')}>
                                    <BannerItem
                                        icon={<FontAwesomeIcon icon={faHandshake} />}
                                        title='Giao hàng toàn quốc'
                                        slogan='Miễn phí vận chuyển với đơn hàng trị giá trên 2.000.000đ'
                                    />
                                </div>
                            </div>
                            <div className='col c-3'>
                                <div className={cx('banner-item')}>
                                    <BannerItem
                                        icon={<FontAwesomeIcon icon={faPhone} />}
                                        title='Hỗ trợ online 24/24'
                                        slogan='Luôn hỗ trợ khách hàng 24/24 tất cả các ngày trong tuần'
                                    />
                                </div>
                            </div>
                            <div className='col c-3'>
                                <div className={cx('banner-item')}>
                                    <BannerItem
                                        icon={<FontAwesomeIcon icon={faArrowsRotate} />}
                                        title='Đổi hàng dễ dàng'
                                        slogan='Miễn phí đổi trả trong vòng 30 ngày đầu tiên cho tất cả các mặt hàng'
                                    />
                                </div>
                            </div>
                            <div className='col c-3'>
                                <div className={cx('banner-item')}>
                                    <BannerItem
                                        icon={<FontAwesomeIcon icon={faGift} />}
                                        title='Quà tặng hấp dẫn'
                                        slogan='Chương trình khuyến mãi cực lớn và hấp dẫn hàng tháng'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid wide'>
                <div className={cx('new-products')}>
                    <Title to="/" slogan='Các sản phẩm mới có tại cửa hàng'>
                        Sản phẩm mới
                    </Title>
                </div>
            </div>
        </div>
    )
}

export default Home