import className from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'

import styles from './Header.module.scss'
import routes from '../../../routes'
import Logo from '../../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import Search from '../../Search'

const cx = className.bind(styles)

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
                                        {/* <Search /> */}
                                    </div>
                                </li>
                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faUser} />
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
                                <li>
                                    <Link to="" className={cx('shopping-cart')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        <div className={cx('current')}>
                                            0
                                        </div>
                                    </Link>
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

