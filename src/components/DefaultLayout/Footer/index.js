import styles from './Footer.module.scss'
import classNames from 'classnames/bind'
import Logo from '../../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faHeadphones, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import routes from '../../../routes'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className='grid wide'>
                <div className={cx('footer-section')}>
                    <div className='row'>
                        <div className='col l-4 m-12'>
                            <div className={cx('footer-contact')}>
                                <Logo />
                                <ul className={cx('footer-infor')}>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, TP Hà Nội
                                    </li>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </span>
                                        <a href="tel:+19006750"> 19006750 </a>
                                    </li>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faHeadphones} />
                                        </span>
                                        <a href="mailto:support@sapo.vn" >support@sapo.vn</a>
                                    </li>
                                    <li>
                                        <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/img_payment_1.jpg?1660294502239" />
                                        <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/img_payment_2.jpg?1660294502239" />
                                        <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/img_payment_3.jpg?1660294502239" />
                                        <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/img_payment_4.jpg?1660294502239" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col l-8 m-12'>
                            <div className={cx('footer-intro')}>
                                <div className='row no-gutters'>
                                    <div className='col l-4 m-4'>
                                        <div className={cx('intro-content')}>
                                            <div className={cx('footer-title')}>
                                                Về chúng tôi
                                            </div>
                                            <ul>
                                                <li>
                                                    <NavLink to={routes.home} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Trang chủ
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={routes.intro} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Giới thiệu
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={`/${'products'}`} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Sản phẩm
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={routes.news} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Tin tức
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={routes.contact} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Liên hệ
                                                    </NavLink>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col l-4 m-4'>
                                        <div className={cx('intro-content')}>
                                            <div className={cx('footer-title')}>
                                                Chính sách
                                            </div>
                                            <ul>
                                                <li>
                                                    <NavLink to={routes.home} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Trang chủ
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={routes.intro} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Giới thiệu
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={`/${'products'}`} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Sản phẩm
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={routes.news} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Tin tức
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={routes.contact} className={(nav) => cx({
                                                        active: nav.isActive
                                                    })}>
                                                        Liên hệ
                                                    </NavLink>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col l-4 m-4'>
                                        <div className={cx('intro-content')}>
                                            <div className={cx('footer-title')}>
                                                Theo dõi chúng tôi
                                            </div>
                                            <div className={cx('social-network')}>
                                                <a href="#">
                                                    <FontAwesomeIcon icon={faYoutube} />
                                                </a>
                                                <a href="#">
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </a>
                                                <a href="#">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                            </div>
                                            <div className={cx('footer-title')}>
                                                Đăng ký để nhận tin
                                            </div>
                                            <form className={cx('footer-form')}>
                                                <input type="text" placeholder='Nhập địa chỉ email' />
                                                <button>
                                                    Gửi
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={cx('copy-right')}>
                    @ Bản quyền thuộc về ND Team | Cung cấp bởi <a href="#">Sapo</a>
                </div>
            </div>
        </div>
    )
}


export default Footer