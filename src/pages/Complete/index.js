import styles from './Complete.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Complete({ cart, ...props }) {

    const { name, phone, mail, address, note } = props

    let sumProduct = 0;
    for (let item of cart) {
        if (item.price_sale) {
            sumProduct += parseInt(item.price_sale) * item.quantity
        } else {
            sumProduct += parseInt(item.price_main) * item.quantity
        }
    }

    return (
        <div className={cx('complete-page')}>
            <div className='grid wide'>
                <Link to='/' className={cx('title')}>
                    <img src="https://bizweb.dktcdn.net/100/437/253/themes/872488/assets/logo.png?1662953459377" />
                </Link>
                <div className='row'>
                    <div className='col l-7'>
                        <div className={cx('noti')}>
                            <div className={cx('noti-icon')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </div>
                            <div className={cx('noti-text')}>
                                <h2>Cảm ơn bạn đã đặt hàng</h2>
                                <p>
                                    Một email xác nhận đã được gửi tới thangcattle@gmail.com.
                                    <br />
                                    Xin vui lòng kiểm tra email của bạn
                                </p>
                            </div>
                        </div>
                        <div className={cx('infor-order')}>
                            <div className='row'>
                                <div className='col l-6'>
                                    <div className={cx('order-title')}>
                                        Thông tin mua hàng
                                    </div>
                                    <ul>
                                        <li>{name}</li>
                                        <li>{mail}</li>
                                        <li>{phone}</li>
                                    </ul>
                                </div>
                                <div className='col l-6'>
                                    <div className={cx('order-title')}>
                                        Địa chỉ nhận hàng
                                    </div>
                                    <ul>
                                        <li>{name}</li>
                                        <li>{address}</li>
                                        <li>{phone}</li>
                                    </ul>
                                </div>
                                <div className='col l-6'>
                                    <div className={cx('order-title')}>
                                        Phương thức thanh toán
                                    </div>
                                    <ul>
                                        <li>Thanh toán khi giao hàng(COD)</li>
                                    </ul>
                                </div>
                                <div className='col l-6'>
                                    <div className={cx('order-title')}>
                                        Phương thức vận chuyển
                                    </div>
                                    <ul>
                                        <li>Giao hàng tận nơi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col l-5'>
                        <div className={cx('member-order')}>
                            <div className={cx('heading')}>
                                Đơn hàng #1 ({cart.length})
                            </div>
                            <div className={cx('member-products')}>
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
                                                    <div className={cx('product-name')}>
                                                        <h4>{item.name}</h4>
                                                        <p>{item.img_color.color} / {item.size}</p>
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
                            <div className={cx('cost')}>
                                <div>
                                    <p>Tạmt tính</p>
                                    <p>{new Intl.NumberFormat().format(sumProduct)}đ</p>
                                </div>
                                <div>
                                    <p>Phí vận chuyển</p>
                                    <p>40.000đ</p>
                                </div>
                            </div>
                            <div className={cx('result')}>
                                <p>Tổng cộng</p>
                                <p className={cx('last-result')}> {new Intl.NumberFormat().format(sumProduct + 40000)}đ </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complete