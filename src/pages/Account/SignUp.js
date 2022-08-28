import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import styles from './Account.module.scss'
import TitlePage from '../../components/TitlePage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import routes from "../../routes";

const cx = classNames.bind(styles)

function SignUp() {
    return (
        <div className={cx('sign-in')}>
            <TitlePage chidren='Đăng ký tài khoản' />
            <div className="grid wide">
                <form className={cx('form')}>
                    <div className={cx('title-form')}>
                        <Link to={routes.signin}>
                            Đăng nhập
                        </Link>
                        <Link to={routes.signup} className={cx('border-bot')}>
                            Đăng ký
                        </Link>
                    </div>
                    <div className={cx('content-form')}>
                        <label>
                            <p>Họ*</p>
                            <input type="text" placeholder="Nhập họ" />
                        </label>
                        <label>
                            <p>Tên*</p>
                            <input type="text" placeholder="Nhập tên" />
                        </label>
                        <label>
                            <p>Số điện thoại*</p>
                            <input type="text" placeholder="Nhập số điện thoại" />
                        </label>
                        <label>
                            <p>Email*</p>
                            <input type="email" placeholder="Nhập địa chỉ email" />
                        </label>
                        <label>
                            <p>Mật khẩu*</p>
                            <input type="password" placeholder="Nhập mật khẩu" />
                        </label>
                        <button type="submit">
                            Đăng nhập
                        </button>
                    </div>
                    <div className={cx('slogan')}>
                        ND Shoes cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.
                    </div>
                    <div className={cx('line-break')}>
                        <span>Hoặc đăng nhập qua</span>
                    </div>
                    <div className={cx('social-network')}>
                        <div className={cx('facebook')}>
                            <FontAwesomeIcon icon={faFacebook} className={cx('icon')} />
                            <span>Facebook</span>
                        </div>
                        <div className={cx('google')}>
                            <FontAwesomeIcon icon={faGoogle} className={cx('icon')} />
                            <span>Google</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignUp