import className from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'

import styles from './Header.module.scss'
import routes from '../../../routes'
import Logo from '../../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBasketShopping, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import Search from '../../Search'

const cx = className.bind(styles)
const login = false;
const size = 0;

function Header() {


    return (
        <div className={cx('header')}>
            <div className='grid wide'>
                <div className={cx('header-section')}>
                    <div className='row no-gutters height-header align-items-center'>
                        <div className='col l-2'>
                            <Logo />
                        </div>
                        <div className='col l-8'>
                            <ul className={cx('nav')}>
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
                                <li className={cx('all-products')}>
                                    <NavLink to={routes.products} className={(nav) => cx({
                                        active: nav.isActive
                                    })}>
                                        Sản phẩm <span><FontAwesomeIcon icon={faAngleDown} /></span>
                                    </NavLink>
                                    <ul className={cx('sub-nav')}>
                                        <li>
                                            <NavLink to='' className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Adidas
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='' className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Nike
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='' className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Converse
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='' className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Vans
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='' className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Puma
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='' className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Fila
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='' className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                MLB
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='' className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                New Blance
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to={routes.news} className={(nav) => cx({
                                        active: nav.isActive
                                    })} >
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
                        <div className='col l-2'>
                            <ul className={cx('group-account')}>
                                <li className={cx('search-icon')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <div className={cx('search-form')}>
                                        <Search />
                                    </div>
                                </li>
                                <li>
                                    <Link to="" className={cx('login-icon')}>
                                        <FontAwesomeIcon icon={faUser} />
                                        {
                                            login ? (
                                                <div className={cx('user-form', 'form')}>
                                                    <Link to="" className={cx('my-account')}>
                                                        Tài khoản
                                                    </Link>
                                                    <Link to="" className={cx('log-out')}>
                                                        Đăng xuất
                                                    </Link>
                                                </div>
                                            ) : (
                                                <div className={cx('login-form', 'form')}>
                                                    <Link to="" className={cx('login')}>
                                                        Đăng nhập
                                                    </Link>
                                                    <Link to="" className={cx('sign-up')}>
                                                        Đăng ký
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className={cx('products-favorite')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                        <div className={cx('current')}>
                                            0
                                        </div>
                                    </Link>
                                </li>
                                <li className={cx('header-cart')}>
                                    <Link to="" className={cx('shopping-cart')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        <div className={cx('current')}>
                                            0
                                        </div>
                                    </Link>
                                    {
                                        size <= 0 ? (
                                            <div className={cx('cart-form')}>
                                                <p className={cx('cart-noti')}>
                                                    Không có sản phẩm nào bên trong giỏ hàng của bạn
                                                </p>
                                            </div>
                                        ) : (
                                            <div className={cx('cart-form', 'form-products')}>
                                                <div className={cx('list-products')}>
                                                    <div className={cx('product-item')}>
                                                        <div className={cx('product-infor')}>
                                                            <Link to="" className={cx('product-img')}>
                                                                <img src="https://bizweb.dktcdn.net/thumb/compact/100/437/253/products/sp7-den-do.jpg" />
                                                            </Link>
                                                            <div className={cx('product-name')}>
                                                                <Link to="" className={cx('product-title')}>
                                                                    Nike air force 1
                                                                </Link>
                                                                <div className={cx('product-color')}>
                                                                    Color:  red
                                                                </div>
                                                                <div className={cx('product-quantity')}>
                                                                    Số lượng: 1
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('product-price')}>
                                                            3.000.000đ
                                                        </div>
                                                    </div>
                                                    <div className={cx('product-item')}>
                                                        <div className={cx('product-infor')}>
                                                            <Link to="" className={cx('product-img')}>
                                                                <img src="https://bizweb.dktcdn.net/thumb/compact/100/437/253/products/sp7-den-do.jpg" />
                                                            </Link>
                                                            <div className={cx('product-name')}>
                                                                <Link to="" className={cx('product-title')}>
                                                                    Nike air force 1
                                                                </Link>
                                                                <div className={cx('product-color')}>
                                                                    Color:  red
                                                                </div>
                                                                <div className={cx('product-quantity')}>
                                                                    Số lượng: 1
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('product-price')}>
                                                            3.000.000đ
                                                        </div>
                                                    </div>
                                                    <div className={cx('product-item')}>
                                                        <div className={cx('product-infor')}>
                                                            <Link to="" className={cx('product-img')}>
                                                                <img src="https://bizweb.dktcdn.net/thumb/compact/100/437/253/products/sp7-den-do.jpg" />
                                                            </Link>
                                                            <div className={cx('product-name')}>
                                                                <Link to="" className={cx('product-title')}>
                                                                    Nike air force 1
                                                                </Link>
                                                                <div className={cx('product-color')}>
                                                                    Color:  red
                                                                </div>
                                                                <div className={cx('product-quantity')}>
                                                                    Số lượng: 1
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('product-price')}>
                                                            3.000.000đ
                                                        </div>
                                                    </div>
                                                    <div className={cx('product-item')}>
                                                        <div className={cx('product-infor')}>
                                                            <Link to="" className={cx('product-img')}>
                                                                <img src="https://bizweb.dktcdn.net/thumb/compact/100/437/253/products/sp7-den-do.jpg" />
                                                            </Link>
                                                            <div className={cx('product-name')}>
                                                                <Link to="" className={cx('product-title')}>
                                                                    Nike air force 1
                                                                </Link>
                                                                <div className={cx('product-color')}>
                                                                    Color:  red
                                                                </div>
                                                                <div className={cx('product-quantity')}>
                                                                    Số lượng: 1
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('product-price')}>
                                                            3.000.000đ
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('pay-btn')}>
                                                    <div className={cx('total')}>
                                                        <span>Tổng tiền: </span>
                                                        <span className={cx('result')}>3.000.000đ</span>
                                                    </div>
                                                    <button>
                                                        Thanh toán
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header

