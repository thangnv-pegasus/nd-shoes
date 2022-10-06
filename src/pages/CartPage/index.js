import styles from './CartPage.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../components/TitlePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function CartPage({ cart, setCart }) {

    const navigate = useNavigate()

    let result = 0;
    for (let item of cart) {
        if (item.price_sale) {
            result += parseInt(item.price_sale)*item.quantity;
        } else {
            result += parseInt(item.price_main)*item.quantity;
        }
    }


    return (
        <div className={cx('cart-page')}>
            <TitlePage chidren='Giỏ hàng' />
            <div className='grid wide'>
                <div className={cx('title')}>
                    Giỏ hàng của bạn
                </div>

                {
                    cart.length > 0 ? (
                        <div className={cx('list-products')}>
                            <div className={cx('title-list', 'table')}>
                                <div className={cx('product-name', 'table-head')}>
                                    Thông tin sản phẩm
                                </div>
                                <div className={cx('product-price', 'table-head')}>
                                    Đơn giá
                                </div>
                                <div className={cx('product-quantity', 'table-head')}>
                                    Số lượng
                                </div>
                                <div className={cx('product-sumary', 'table-head')}>
                                    Thành tiền
                                </div>

                            </div>
                            <div className={cx('title-list')}>
                                {
                                    cart.map((item, index) => {
                                        return (
                                            <div className={cx('product-item', 'table')} key={index}>
                                                <div className={cx('product-name', 'table-body')}>
                                                    <Link to={`/product/${item.id}`} className={cx('product-img')}>
                                                        <img src={item.img_color.url[0]} />
                                                    </Link>
                                                    <div className={cx('product-infor')}>
                                                        <Link to={`/product/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                        <div>
                                                            {item.img_color.color} / {item.size}
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                setCart(pre => [...pre.filter(item2 => {
                                                                    if ((item2.size === item.size && item2.img_color.code === item.img_color.code) && item2.id === item.id) {
                                                                        return false;
                                                                    }
                                                                    else {
                                                                        return true;
                                                                    }
                                                                })])
                                                            }}
                                                        >
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className={cx('product-price', 'table-body')}>
                                                    {
                                                        item.price_sale ? (
                                                            new Intl.NumberFormat().format(parseInt(item.price_sale, 10)) + "đ"
                                                        ) : (
                                                            new Intl.NumberFormat().format(parseInt(item.price_main, 10)) + "đ"
                                                        )
                                                    }
                                                </div>
                                                <div className={cx('product-quantity', 'table-body')}>
                                                    <button
                                                        onClick={() => {
                                                            if (item.quantity == 1) {
                                                                setCart(pre => pre.filter(item2 => {
                                                                    if (item2.id === item.id && item2.img_color.code === item.img_color.code && item2.size === item.size) {
                                                                        return false;
                                                                    } else {
                                                                        return true;
                                                                    }
                                                                }))
                                                            } else {
                                                                setCart(pre => pre.map(item2 => {
                                                                    if (item2.id === item.id && item2.img_color.code === item.img_color.code && item2.size === item.size) {
                                                                        return { ...item2, quantity: item2.quantity - 1 }
                                                                    } else {
                                                                        return { ...item2 }
                                                                    }
                                                                }))
                                                            }
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <button tabIndex='-1'>
                                                        {item.quantity}
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setCart(pre => pre.map(item2 => {
                                                                if (item2.id === item.id && item2.img_color.code === item.img_color.code && item2.size === item.size) {
                                                                    return { ...item2, quantity: item2.quantity + 1 }
                                                                } else {
                                                                    return { ...item2 }
                                                                }
                                                            }))
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <div className={cx('product-sumary', 'table-body')}>
                                                    {
                                                        item.price_sale ? (
                                                            new Intl.NumberFormat().format(parseInt(item.price_sale) * item.quantity, 10) + "đ"
                                                        ) : (
                                                            new Intl.NumberFormat().format(parseInt(item.price_main) * item.quantity, 10) + "đ"
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={cx('result')}>
                                <div className={cx('row')}>
                                    <div className='l-4 m-12'>
                                        <div className={cx('result-text')}>
                                            <p>Tổng tiền: </p>
                                            <p className={cx('total')}>{new Intl.NumberFormat().format(result, 10)}đ</p>
                                        </div>
                                        <button onClick={() => navigate('/orderPage')}>
                                            Thanh toán
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('cart-noti')}>
                            <div>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                            <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default CartPage