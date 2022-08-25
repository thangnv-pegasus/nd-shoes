import clsx from 'clsx'
import TitlePage from '../../components/TitlePage'
import styles from './Intro.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Intro() {
    return (
        <div className={cx('intro-page')}>
            <TitlePage chidren='Giới thiệu' />
            <div className='grid wide'>
                <div className={cx('intro-page__section')}>
                    <div className={cx('title')}>
                        Giới thiệu
                    </div>
                    <div className={cx('text')}>
                        Giầy dép là một trong những phụ kiện không thể thiếu góp phần tạo nên phong cách thời trang của mỗi người. Chính vì điều đó ND SHOES mong muốn đem đến những mẫu giầy mới nhất được cập nhật thường xuyên giúp các bạn dễ dàng hơn trong việc lựa chọn và cập nhật những style thịnh hành của thời trang giầy dép trong nước và thế giới.
                    </div>
                    <div className={cx('text')}>
                        ND SHOES có hàng hóa đa dạng với giày, dép, túi ... sẵn sàng phục vụ quý khách nhanh chóng thông qua việc bán tại cửa hàng tại 255 Cầu Giấy, Hà Nội và đặt hàng online trên website.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro