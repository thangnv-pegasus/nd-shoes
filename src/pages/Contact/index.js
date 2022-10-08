import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import TitlePage from '../../components/TitlePage'

const cx = classNames.bind(styles)

function Contact() {
    return (
        <div className={cx('contact-page')}>
            <TitlePage chidren="Liên hệ" />
            <div className='grid wide'>
                <div className={cx('contact-section')}>
                    <div className='row'>
                        <div className='col l-6 m-12 c-12'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7447.808548203042!2d105.8158777!3d21.0365159!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zUGjhuqduIG3hu4FtIHF14bqjbiBsw70gYsOhbiBow6BuZyAtIFNhcG8gUE9TIFThuqduZyA2LCBUw7JhIG5ow6AgTGFkZWNvLCBT4buRLCAyNjYgxJDhu5lpIEPhuqVuIExp4buFdSBHaWFpIEJhIMSQw6xuaCwgSMOgIE7hu5lpIDEwMDAwMA!3m2!1d21.036515899999998!2d105.8158777!5e0!3m2!1svi!2s!4v1661483856327!5m2!1svi!2s"
                                width="600px"
                                height="450px"
                                style={{ border: "0px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className='col l-6 m-12 c-12'>
                            <div className={cx('contact-form')}>
                                <div className={cx('title')}>
                                    Liên hệ chúng tôi
                                </div>
                                <div className={cx('slogan')}>
                                    Để liên hệ và nhận các thông tin khuyến mãi sớm nhất, Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất
                                </div>
                                <form>
                                    <label htmlFor='name'>
                                        Họ tên*
                                    </label>
                                    <input type="text" placeholder='Nhập họ tên' id="name" />
                                    <label htmlFor='email'>
                                        Email*
                                    </label>
                                    <input type="email" placeholder='Nhập Địa chỉ email' id="email" />
                                    <label htmlFor='phone'>
                                        Điện thoại*
                                    </label>
                                    <input type="tel" placeholder='Nhập số điện thoại' id="phone" />
                                    <label htmlFor='content'>
                                        Nội dung*
                                    </label>
                                    <textarea type="text" placeholder='Nội dung liên hệ' id="content" />
                                    <button type="submit">
                                        Gửi liên hệ ngay
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact