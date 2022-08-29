import classNames from "classnames/bind";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from './Account.module.scss'
import TitlePage from '../../components/TitlePage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import routes from "../../routes";
import { useState } from "react";
import data from '../../data/db.json'

const cx = classNames.bind(styles)
const acc = data.account

function Signin({ setLogin,setThisAccount }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let check = false;
    const navigate = useNavigate()
    const localAccount = JSON.parse(localStorage.getItem('account'))

    const checkAccount = () => {
        let check = false;
        let account;
        for (let item of acc) {
            if (item.email === email && item.password === password) {
                check = true;
                account = item
                navigate('/')
                break;
            }
        }
        for(let item of localAccount){
            if(item.email === email && item.password === password){
                check = true;
                account = item
                navigate('/')
                break;
            }
        }
        if(!check){
            alert('Sai tài khoản hoặc mật khẩu!')
        }
        window.scrollTo(0,0)
        setThisAccount(account)
        setLogin(check)
    }

    return (
        <div className={cx('sign-in')}>
            <TitlePage chidren='Đăng nhập tài khoản' />
            <div className="grid wide">
                <form className={cx('form')} onSubmit={(e) => {
                    e.preventDefault()
                    checkAccount()
                }}>
                    <div className={cx('title-form')}>
                        <Link to={routes.signin} className={cx('border-bot')}>
                            Đăng nhập
                        </Link>
                        <Link to={routes.signup}>
                            Đăng ký
                        </Link>
                    </div>
                    <div className={cx('content-form')}>
                        <label>
                            <p>Email*</p>
                            <input type="email" placeholder="Nhập địa chỉ email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

export default Signin