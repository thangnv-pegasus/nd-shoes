import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import styles from './Account.module.scss'
import TitlePage from '../../components/TitlePage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import routes from "../../routes";
import data from '../../data/db.json'
import { useState } from "react";

const cx = classNames.bind(styles)
const accounts = data.account

function SignUp() {

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [listAcc, setListAcc] = useState([])
    localStorage.setItem('account', JSON.stringify(listAcc))
    const checkAccount = () => {
        let check = false;
        for (let item of accounts) {
            if (item.email === email || item.phone === phone) {
                check = true;
                break;
            }
        }
        if (check) {
            alert('Tài khoản đã tồn tại!')
        } else {
            let acc = {
                username: fName + ' ' + lName,
                phone,
                email,
                password
            }
            alert('Đăng ký thành công!')
            setListAcc(pre => [...pre, acc])
        }
    }

    return (
        <div className={cx('sign-in')}>
            <TitlePage chidren='Đăng ký tài khoản' />
            <div className="grid wide">
                <form className={cx('form')} onSubmit={e => {
                    e.preventDefault()
                    checkAccount()
                }}>
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
                            <input type="text" placeholder="Nhập họ"
                                value={fName}
                                onChange={e => setFName(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Tên*</p>
                            <input type="text" placeholder="Nhập tên"
                                value={lName}
                                onChange={e => setLName(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Số điện thoại*</p>
                            <input type="text" placeholder="Nhập số điện thoại"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Email*</p>
                            <input type="email" placeholder="Nhập địa chỉ email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Mật khẩu*</p>
                            <input type="password" placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </label>
                        <button type="submit">
                            Đăng ký
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