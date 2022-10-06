import styles from './CartModal.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const cx = classNames.bind(styles)

function CartModal({ cart, setOpenModal, setCart }) {

    const [quantity, setQuantity] = useState()
    const navigate = useNavigate()

    const result = () => {
        let s = 0;
        for (let itemx of cart) {
            if (itemx.price_sale) {
                s += parseInt(itemx.price_sale) * itemx.quantity
            } else {
                s += parseInt(itemx.price_main) * itemx.quantity
            }
        }
        return s;
    }


    return (
        <div className={cx('cart-modal')} onClick={(e) => setOpenModal(false)} >
            <div className={cx('cart-section')} onClick={e => e.stopPropagation()}>
                <div className={cx('cart-title')}>
                    <p>Giỏ hàng</p>
                    <span onClick={() => setOpenModal(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </div>
                <div className={cx('cart')}>
                    <div className={cx('list-product')}>
                        {
                            cart.map((product, index) => {
                                return (
                                    <div className={cx('product-item')} key={index}>
                                        <div className={cx('product-img')}>
                                            <img src={product.img_color.url[0]} />
                                        </div>
                                        <div className={cx('product-infor')}>
                                            <Link to={`/product/${product.id}`} className={cx('product-name')}
                                                onClick={() => setOpenModal(false)}
                                            >
                                                {product.name}
                                            </Link>
                                            <div className={cx('product-color-size')}>
                                                {product.img_color.color} / {product.size}
                                            </div>
                                            <div className={cx('product-active')}>
                                                <div className={cx('product-quantity')}>
                                                    Số lượng:
                                                    <div className={cx('set-product')}>
                                                        <button
                                                            onClick={() => {
                                                                if (product.quantity == 1) {
                                                                    setCart(pre => pre.filter(item2 => {
                                                                        if (item2.id === product.id && item2.img_color.code === product.img_color.code && item2.size === product.size) {
                                                                            return false;
                                                                        } else {
                                                                            return true;
                                                                        }
                                                                    }))
                                                                } else {
                                                                    setCart(pre => pre.map(item2 => {
                                                                        if (item2.id === product.id && item2.img_color.code === product.img_color.code && item2.size === product.size) {
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
                                                        <button className={cx('quantity')}>{product.quantity}</button>
                                                        <button
                                                            onClick={() => {
                                                                setCart(pre => pre.map(item2 => {
                                                                    if (item2.id === product.id && item2.img_color.code === product.img_color.code && item2.size === product.size) {
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
                                                </div>
                                                <div className={cx('product-price')}>
                                                    {
                                                        product.price_sale ? (
                                                            new Intl.NumberFormat().format(parseInt(product.price_sale, 10)) + "đ"
                                                        ) : (
                                                            new Intl.NumberFormat().format(parseInt(product.price_main, 10)) + "đ"
                                                        )
                                                    }
                                                    <button
                                                        onClick={() => {
                                                            setCart(pre => [...pre.filter(item2 => {
                                                                if ((item2.size === product.size && item2.img_color.code === product.img_color.code) && item2.id === product.id) {
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

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={cx('pay')}>
                        <div className={cx('result')}>
                            <p>Tổng tiền</p>
                            <p className={cx('result-price')}>{new Intl.NumberFormat().format(result())}đ</p>
                        </div>
                        <button className={cx('pay-btn')}
                            onClick={() => navigate('/orderPage')}
                        >
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal


