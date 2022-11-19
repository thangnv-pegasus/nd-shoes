import className from 'classnames/bind'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import styles from './Header.module.scss'
import routes from '../../../routes'
import Logo from '../../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faBasketShopping, faCartShopping, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import Search from '../../Search'
import Menu from '../../Menu'
import { useState } from 'react'

const cx = className.bind(styles)
const size = 0;

function Header({ thisAccount, login, setLogin, cart, allProduct }) {

    const navigate = useNavigate()

    const [openList, setOpenList] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const handleDown = () => {
        setOpenList(!openList)
    }

    const total = () => {
        let x = 0;
        for (let product of cart) {
            if (product.price_sale) {
                x += product.price_sale * product.quantity
            }
            else {
                x += product.price_main * product.quantity
            }
        }
        return x;
    }


    return (
        <div className={cx('header')}>
            <div className='grid wide'>
                <div className={cx('header-section')}>
                    <div className='row no-gutters space-between height-header align-items-center'>
                        <div className='col l-2 m-2 c-5'>
                            <Logo />
                        </div>
                        <div className='col l-8 m-0 c-0'>
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
                                    <NavLink to={`/collections/${'products'}`} className={(nav) => cx({
                                        active: nav.isActive
                                    })}>
                                        Sản phẩm <span><FontAwesomeIcon icon={faAngleDown} /></span>
                                    </NavLink>
                                    <ul className={cx('sub-nav')}>
                                        <li>
                                            <NavLink to={`/productKind/${'adidas'}`} className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}
                                            >
                                                Adidas
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/productKind/${'nike'}`} className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Nike
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/productKind/${'converse'}`} className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Converse
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/productKind/${'vans'}`} className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Vans
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/productKind/${'puma'}`} className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Puma
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/productKind/${'fila'}`} className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                Fila
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/productKind/${'mlb'}`} className={(nav) => {
                                                cx({
                                                    active: nav.isActive
                                                })
                                            }}>
                                                MLB
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/productKind/${'new balance'}`} className={(nav) => {
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
                        <div className='col l-2 m-2 c-7'>
                            <ul className={cx('group-account')}>
                                <li className={cx('search-icon')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <div className={cx('search-form')}>
                                        <Search />
                                    </div>
                                </li>
                                <li>
                                    <Link to={login ? routes.member : routes.signin} className={cx('login-icon')}>
                                        <FontAwesomeIcon icon={faUser} />
                                        {
                                            login ? (
                                                <div className={cx('user-form', 'form')}>
                                                    <Link to={routes.member} className={cx('my-account')}>
                                                        {thisAccount.username}
                                                    </Link>
                                                    <Link to={routes.home} className={cx('log-out')} onClick={() => setLogin(false)}>
                                                        Đăng xuất
                                                    </Link>
                                                </div>
                                            ) : (
                                                <div className={cx('login-form', 'form')}>
                                                    <Link to={routes.signin} className={cx('login')}>
                                                        Đăng nhập
                                                    </Link>
                                                    <Link to={routes.signup} className={cx('sign-up')}>
                                                        Đăng ký
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.favorite} className={cx('products-favorite')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                        <div className={cx('current')}>
                                            {/* {productFavorite.length} */}0
                                        </div>
                                    </Link>
                                </li>
                                <li className={cx('header-cart')}>
                                    <Link to={routes.cart} className={cx('shopping-cart')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        <div className={cx('current')}>
                                            {cart.length}
                                        </div>
                                    </Link>
                                    {
                                        cart.length <= 0 ? (
                                            <div className={cx('cart-form')}>
                                                <p className={cx('cart-noti')}>
                                                    Không có sản phẩm nào bên trong giỏ hàng của bạn
                                                </p>
                                            </div>
                                        ) : (
                                            <div className={cx('cart-form', 'form-products')}>
                                                <div className={cx('list-products')}>
                                                    {
                                                        cart.map((product, index) => {
                                                            return (
                                                                <div className={cx('product-item')} key={index}>
                                                                    <div className={cx('product-infor')}>
                                                                        <Link to={`/product/${product.id}`} className={cx('product-img')}>
                                                                            <img src={product.img_color.url[0]} />
                                                                        </Link>
                                                                        <div className={cx('product-name')}>
                                                                            <Link to={`/product/${product.id}`} className={cx('product-title')}>
                                                                                {product.name}
                                                                            </Link>
                                                                            <div className={cx('product-color')}>
                                                                                Color: {product.img_color.color}
                                                                            </div>
                                                                            <div className={cx('product-quantity')}>
                                                                                Số lượng: {product.quantity}
                                                                            </div>
                                                                            <div className={cx('product-size')}>
                                                                                Size: {product.size}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={cx('product-price')}>
                                                                        {
                                                                            product.price_sale ? (
                                                                                new Intl.NumberFormat().format(parseInt(product.price_sale, 10)) + "đ"
                                                                            ) : (
                                                                                new Intl.NumberFormat().format(parseInt(product.price_main, 10)) + "đ"
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className={cx('pay-btn')}>
                                                    <div className={cx('total')}>
                                                        <span>Tổng tiền: </span>
                                                        <span className={cx('result')}>{new Intl.NumberFormat().format(parseInt(total(), 10))}đ</span>
                                                    </div>
                                                    <button onClick={() => navigate('/orderPage')}>
                                                        Thanh toán
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </li>
                                <li className={cx('header__menu')}>
                                    <FontAwesomeIcon icon={faBars} onClick={() => setOpenModal(!openModal)} />
                                    <div className={cx('menu-modal')}
                                        style={openModal ? ({ display: 'block' }) : ({ display: 'none' })}
                                        onClick={()=>setOpenModal(false)}
                                    >
                                        <ul className={cx('menu')} onClick={(e)=>e.stopPropagation()}>
                                            <li>
                                                <a href={routes.home}>Trang chủ</a>
                                            </li>
                                            <li>
                                                <a href={routes.intro}>Giới thiệu</a>
                                            </li>
                                            <li className={cx('sub-menu')}>
                                                <div className={cx('flex')}>
                                                    <a href={routes.products}>Sản phẩm</a>
                                                    <span onClick={handleDown}>
                                                        <FontAwesomeIcon icon={faAngleDown} />
                                                    </span>
                                                </div>
                                                <ul className={cx('list-brand')} style={openList ? ({ display: 'block' }) : ({ display: 'none' })}>
                                                    <li>
                                                        <a href={`/productKind/${'Adidas'}`}>Adidas</a>
                                                    </li>
                                                    <li>
                                                        <a href={`/productKind/${'Nike'}`}>Nike</a>
                                                    </li>
                                                    <li>
                                                        <a href={`/productKind/${'Converse'}`}>Converse</a>
                                                    </li>
                                                    <li>
                                                        <a href={`/productKind/${'Vans'}`}>Vans</a>
                                                    </li>
                                                    <li>
                                                        <a href={`/productKind/${'Puma'}`}>Puma</a>
                                                    </li>
                                                    <li>
                                                        <a href={`/productKind/${'Fila'}`}>FILA</a>
                                                    </li>
                                                    <li>
                                                        <a href={`/productKind/${'MLB'}`}>MLB</a>
                                                    </li>
                                                    <li>
                                                        <a href={`/productKind/${'New Balance'}`}>New Balance</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href={routes.news}>Tin tức</a>
                                            </li>
                                            <li>
                                                <a href={routes.contact}>Liên hệ</a>
                                            </li>
                                            <div className={cx('close-icon')} onClick={() => setOpenModal(false)}>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </div>
                                        </ul>
                                    </div>
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

