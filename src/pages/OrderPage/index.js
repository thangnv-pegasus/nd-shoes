import styles from './OrderPage.module.scss'
import classNames from 'classnames/bind'
import AddForm from '../../components/AddForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link, Routes, useNavigate } from 'react-router-dom'
import routes from '../../routes'

const cx = classNames.bind(styles)

function OrderPage({ cart, ...props }) {

    const [check, setCheck] = useState()
    const { name, setName, phone, setPhone, mail, setMail, address, setAddress, note, setNote } = props

    const navigate = useNavigate()

    let sumPrice = 0;
    for (let item of cart) {
        if (item.price_sale) {
            sumPrice += parseInt(item.price_sale) * item.quantity
        } else {
            sumPrice += parseInt(item.price_main) * item.quantity
        }
    }

    return (
        <div className={cx('order-page')}>
            <div className='grid wide'>
                <div className='row'>
                    <div className='col l-8'>
                        <div className={cx('main')}>
                            <div className={cx('title')}>
                                <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/logo.png?1662953459377" />
                            </div>
                            <div className='row'>
                                <div className='col l-6'>
                                    <div className={cx('add-member')}>
                                        <div className={cx('add-title')}>
                                            Thông tin nhận hàng
                                        </div>
                                        <AddForm
                                            mail={mail}
                                            setMail={setMail}
                                            name={name}
                                            setName={setName}
                                            phone={phone}
                                            setPhone={setPhone}
                                            address={address}
                                            setAddress={setAddress}
                                            note={note}
                                            setNote={setNote}
                                        />
                                    </div>
                                </div>
                                <div className='col l-6'>
                                    <div className={cx('add-title')}>
                                        Vận chuyển
                                    </div>
                                    <div className={cx('form-noti')}>
                                        Vui lòng nhập thông tin giao hàng
                                    </div>
                                    <div className={cx('add-title', 'pay')}>
                                        Thanh toán
                                    </div>
                                    <div className={cx('check-pay')}>
                                        <label>
                                            <input type="radio"
                                                onChange={() => setCheck(true)}
                                            />Thanh toán khi giao hàng(COD)
                                        </label>
                                        <div className={cx('check-pay-icon')}>
                                            <FontAwesomeIcon icon={faMoneyBill} />
                                        </div>
                                        {
                                            check &&
                                            <div className={cx('check-noti')}>
                                                Bạn chỉ phải thanh toán khi nhận được hàng
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col l-4'>
                        <div className={cx('side-bar')}>
                            <div className={cx('side-bar__heading')}>
                                Đơn hàng({cart.length} sản phẩm)
                            </div>
                            <div className={cx('list-products')}>
                                {
                                    cart.map((item, index) => {
                                        return (
                                            <div className={cx('product-item')} key={index}>
                                                <div className={cx('product-infor')}>
                                                    <Link to={`/product/${item.id}`} className={cx('product-img')}>
                                                        <img src={item.img_color.url[0]} />
                                                        <div className={cx('product-quantity')}>
                                                            {item.quantity}
                                                        </div>
                                                    </Link>
                                                    <div className={cx('product-title')}>
                                                        <Link to={`/product/${item.id}`} className={cx('product-name')}>
                                                            {item.name}
                                                        </Link>
                                                        <div className={cx('product-size')}>
                                                            {item.img_color.color} / {item.size}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('product-price')}>
                                                    {
                                                        item.price_sale ? (
                                                            new Intl.NumberFormat().format(parseInt(item.price_sale)) + "đ"
                                                        ) : (
                                                            new Intl.NumberFormat().format(parseInt(item.price_main)) + "đ"
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={cx('voucher')}>
                                <input type="text" placeholder='Nhập mã giảm giá' /> <button> Áp dụng </button>
                            </div>
                            <div className={cx('bar-noti')}>
                                <div>
                                    <p>Tạm tính</p><p>{new Intl.NumberFormat().format(sumPrice)}đ</p>
                                </div>
                                <div>
                                    <p>Phí vận chuyển</p> {check && <p> 40.000đ </p>}
                                </div>
                            </div>
                            <div className={cx('result')}>
                                <div>
                                    <p>Tổng cộng</p> <p>{new Intl.NumberFormat().format(sumPrice + 40000)}đ </p>
                                </div>
                                <div>
                                    <Link to={routes.cart}>
                                        <FontAwesomeIcon icon={faCaretLeft} /> <span>Quay về giỏ hàng</span>
                                    </Link>
                                    <button className={cx('buy')}
                                        onClick={() => navigate(routes.complete)}
                                    >
                                        Đặt hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage