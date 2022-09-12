import styles from './OrderPage.module.scss'
import classNames from 'classnames/bind'
import AddForm from '../../components/AddForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const cx = classNames.bind(styles)

function OrderPage({ cart }) {

    const [check, setCheck] = useState()

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
                                        <AddForm />
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
                                                    <div className={cx('product-img')}>
                                                        <img src={item.img_color.url[0]} />
                                                        <div className={cx('product-quantity')}>
                                                            {item.quantity}
                                                        </div>
                                                    </div>
                                                    <div className={cx('product-title')}>
                                                        <div className={cx('product-name')}>
                                                            {item.name}
                                                        </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage