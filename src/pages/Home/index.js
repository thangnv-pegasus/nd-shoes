import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Home.module.scss'
import BannerItem from '../../components/BannerItem'
import Banner from '../../components/Banner'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faArrowsRotate, faGift, faPhone, faRightLong } from '@fortawesome/free-solid-svg-icons'
import Title from '../../components/Title'
import ProductItem from '../../components/ProductItem'
import data from '../../data/db.json'
import FeedBack from '../../components/FeedBack'
import Blog from '../../components/Blog'
import routes from '../../routes'

const cx = classNames.bind(styles)
const products = data.products



const feedback = data.feedback
const blogs = data.blogs

function Home({ setCart, setAllProduct, allProduct }) {
    const Adidas = allProduct.filter((product) => product.brand.toLowerCase() === 'adidas')
    const Nike = allProduct.filter((product) => product.brand.toLowerCase() === 'nike')
    const Converse = allProduct.filter((product) => product.brand.toLowerCase() === 'converse')
    const Vans = allProduct.filter((product) => product.brand.toLowerCase() === 'vans')
    const Puma = allProduct.filter((product) => product.brand.toLowerCase() === 'puma')
    const Fila = allProduct.filter((product) => product.brand.toLowerCase() === 'fila')
    const MLB = allProduct.filter((product) => product.brand.toLowerCase() === 'mlb')
    const NewBalance = allProduct.filter((product) => product.brand.toLowerCase() === 'new balance')
    const [elementActive, setElementActive] = useState()

    const [productKind, setProductKind] = useState([...Adidas])

    const refAdidas = useRef()

    const handleActive = (element) => {
        element.classList.add('active')
        setElementActive((pre) => {
            if (pre.classList.contains('active')) {
                pre.classList.remove('active')
            }
            return element
        })
    }

    useEffect(() => {
        let element = refAdidas.current
        setElementActive(element)
    }, [])


    const handleProductKind = (element) => {
        switch (element.id) {
            case '1':
                setProductKind([...Adidas])
                break;
            case '2':
                setProductKind([...Nike])
                break;
            case '3':
                setProductKind([...Converse])
                break;
            case '4':
                setProductKind([...Vans])
                break;
            case '5':
                setProductKind([...Puma])
                break;
            case '6':
                setProductKind([...Fila])
                break;
            case '7':
                setProductKind([...MLB])
                break;
            case '8':
                setProductKind([...NewBalance])
                break;
        }
        handleActive(element)
    }


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

            {/* new products */}
            <div className={cx('new-products')}>
                <div className='grid wide'>
                    <Title to={`/${'products'}`} slogan='Các sản phẩm mới có tại cửa hàng'>
                        Sản phẩm mới
                    </Title>
                    <div className={cx('products-section')}>
                        <div className='row'>
                            {
                                allProduct.map((product, index) => {
                                    if (index < 8) {
                                        return (
                                            <div className='col l-3' key={index}>
                                                <ProductItem
                                                    setCart={setCart}
                                                    product={product}
                                                    setAllProduct={setAllProduct}
                                                    allProduct={allProduct}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <Link to={`/${'products'}`} className={cx('see-more')} onClick={() => window.scrollTo(0, 0)}>
                            Xem tất cả
                        </Link>
                    </div>
                </div>
            </div>

            {/* product hot */}
            <div className={cx('products-hot')}>
                <div className='grid wide'>
                    <Title to={`/${'products'}`} slogan='Các sản phẩm bán chạy tại cửa hàng'>
                        Sản phẩm bán chạy
                    </Title>
                    <div className={cx('intro-img')}>
                        <img src="https://bizweb.dktcdn.net/100/437/253/collections/img-best-sellers.jpg?v=1640074839860" />
                    </div>
                    <div className={cx('products-section')}>
                        <div className='row'>
                            {
                                products.map((product, index) => {
                                    if (product.id > 9 && product.id < 18) {
                                        return (
                                            <div className='col l-3' key={index}>
                                                <ProductItem
                                                    product={product}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <Link to={`/${'products'}`} className={cx('see-more')} onClick={() => window.scrollTo(0, 0)}>
                            Xem tất cả
                        </Link>
                    </div>
                </div>
            </div>

            {/* product classification */}
            <div className={cx('products-kind')}>
                <div className='grid wide'>
                    <Title to={`/${'products'}`} slogan='Các sản phẩm Sneakers có tại ND Shoes'>
                        Sneakers
                    </Title>
                    <div className={cx('products-section')}>
                        <ul className={cx('options')}>
                            <li id="1" className='active' onClick={(e) => handleProductKind(e.target)} ref={refAdidas}>
                                Adidas
                            </li>
                            <li id="2" onClick={(e) => handleProductKind(e.target)}>
                                Nike
                            </li>
                            <li id="3" onClick={(e) => handleProductKind(e.target)}>
                                Converse
                            </li>
                            <li id="4" onClick={(e) => handleProductKind(e.target)}>
                                Vans
                            </li>
                            <li id="5" onClick={(e) => handleProductKind(e.target)}>
                                Puma
                            </li>
                            <li id="6" onClick={(e) => handleProductKind(e.target)}>
                                FILA
                            </li>
                            <li id="7" onClick={(e) => handleProductKind(e.target)}>
                                MLB
                            </li>
                            <li id="8" onClick={(e) => handleProductKind(e.target)}>
                                New Balance
                            </li>
                        </ul>
                        <div className='row'>
                            {
                                productKind.map((product, index) => {
                                    if (index < 9) {
                                        return (
                                            <div className='col l-3' key={index}>
                                                <ProductItem
                                                    product={product}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* accessory */}
            <div className={cx('accessory')}>
                <Title slogan="Tất cả phụ kiện có tại ND Shoes">
                    Phụ kiện
                </Title>
                <div className='grid wide'>
                    <div className={cx('accessory-section')}>
                        <div className='row'>
                            <div className='col c-6'>
                                <div className={cx('accessory-img', 'big-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/accessories_1.jpg?1660294502239" />
                                    <div className={cx('accessory-title')}>
                                        <Link to={`/accessory/${'bag'}`} className={cx('accessory-name')} onClick={() => window.scrollTo(0, 0)}>
                                            Balo-túi
                                        </Link>
                                        <Link to={`/accessory/${'bag'}`} onClick={() => window.scrollTo(0, 0)}>
                                            Xem thêm
                                            <span> <FontAwesomeIcon icon={faRightLong} /> </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col c-6'>
                                <div className={cx('accessory-img', 'sm-img', 'sm-1')}>
                                    <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/accessories_2.jpg?1660294502239" />
                                    <div className={cx('accessory-title')}>
                                        <Link to={`/accessory/${'sock'}`} className={cx('accessory-name')} onClick={() => window.scrollTo(0, 0)}>
                                            Tất giày
                                        </Link>
                                        <Link to={`/accessory/${'sock'}`} onClick={() => window.scrollTo(0, 0)}>
                                            Xem thêm
                                            <span> <FontAwesomeIcon icon={faRightLong} /> </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx('accessory-img', 'sm-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/accessories_3.jpg?1660294502239" />
                                    <div className={cx('accessory-title')}>
                                        <Link to={`/accessory/${'hat'}`} className={cx('accessory-name')} onClick={() => window.scrollTo(0, 0)}>
                                            Mũ
                                        </Link>
                                        <Link to={`/accessory/${'hat'}`} onClick={() => window.scrollTo(0, 0)}>
                                            Xem thêm
                                            <span> <FontAwesomeIcon icon={faRightLong} /> </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={`/${'accessory'}`} className={cx('see-more')} onClick={() => window.scrollTo(0, 0)}>
                            Xem tất cả
                        </Link>
                    </div>
                </div>
            </div>

            {/* feedback */}
            <div className={cx('feed-back')}>
                <div className='grid wide' style={{ zIndex: '10' }}>
                    <div className={cx('feedback-section')}>
                        <Title
                            slogan='Album feedback của khách hàng về ND Shoes'
                            whiteColor={true}
                        >
                            Feed back
                        </Title>
                        <div className='row'>
                            {
                                feedback.map((fb, index) => {
                                    return (
                                        <div className='col l-3' key={index}>
                                            <FeedBack
                                                feedback={fb}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* news */}
            <div className={cx('news')}>
                <div className='grid wide'>
                    <div className={cx('news-section')}>
                        <Title to={routes.news}
                            slogan='Tổng hợp tin tức, mẹo vặt cho bạn'
                        >
                            Tin tức
                        </Title>
                        <div className='row'>
                            {
                                blogs.map(blog => {
                                    if (blog.id < 4) {
                                        return (
                                            <div className='col l-4'>
                                                <Blog
                                                    blog={blog}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home