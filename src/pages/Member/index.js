import styles from './Member.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../components/TitlePage'

const cx = classNames.bind(styles)

function Member() {
    return (
        <div className={cx('member-page')}>
            <TitlePage chidren="Trang khách hàng" />
            <div className='grid wide'>
                <div className={cx('member-page__section')}>
                    <div className='row'>
                        <div className='col l-4'>
                            <div className={cx('page-selection')}>
                                <div className={cx('title')}>
                                    Trang tài khoản
                                </div>
                                <div className={cx('page-welcome')}>
                                    Xin chào ....
                                </div>
                                <ul className={cx('list-selections')}>
                                    <li>
                                        Thông tin tài khoản
                                    </li>
                                    <li>
                                        Đơn hàng của bạn
                                    </li>
                                    <li>
                                        Đổi mật khẩu
                                    </li>
                                    <li>
                                        Số địa chỉ
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col l-4'>
                            <div className={cx('page-content')}>
                                <div className={cx('title')}>
                                    Thông tin tài khoản
                                </div>
                                <div className={cx('member-infor')}>
                                    <span>Họ tên: </span> ....
                                </div>
                                <div className={cx('member-infor')}>
                                    <span>Email: </span> ....
                                </div>
                                <div className={cx('member-infor')}>
                                    <span>Điện thoại: </span> ....
                                </div>
                                <div className={cx('member-infor')}>
                                    <span>Địa chỉ: </span> ....
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member