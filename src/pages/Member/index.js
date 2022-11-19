import styles from './Member.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../components/TitlePage'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Member({thisAccount, setThisAccount}) {

    const [tab, setTab] = useState(1)

    const localAccount = JSON.parse(localStorage.getItem('account'))

    return (
        <div className={cx('member-page')}>
            <TitlePage chidren="Trang khách hàng" />
            <div className='grid wide'>
                <div className={cx('member-page__section')}>
                    <div className='row'>
                        <div className='col l-4'>
                            <div className={cx('page-selection')}>
                                <div className={cx('title')}>
                                    Trang tài khoản
                                </div>
                                <div className={cx('page-welcome')}>
                                    Xin chào <span>{thisAccount.username}</span>
                                </div>
                                <ul className={cx('list-selections')}>
                                    <li style={tab === 1 ? {color:'var(--primary-color)'}:{color:'black'}}
                                        onClick={()=>setTab(1)}
                                    >
                                        Thông tin tài khoản
                                    </li>
                                    <li  style={tab === 2 ? {color:'var(--primary-color)'}:{color:'black'}}
                                        onClick={()=>setTab(2)}
                                    >
                                        Đơn hàng của bạn
                                    </li>
                                    <li style={tab === 3 ? {color:'var(--primary-color)'}:{color:'black'}}
                                        onClick={()=>setTab(3)}
                                    >
                                        Đổi mật khẩu
                                    </li>
                                    <li style={tab === 4 ? {color:'var(--primary-color)'}:{color:'black'}}
                                        onClick={()=>setTab(4)}
                                    >
                                        Số địa chỉ
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col l-8'>
                            {
                                tab === 1 && (
                                    <div className={cx('page-content')}>
                                <div className={cx('title')}>
                                    Thông tin tài khoản
                                </div>
                                <div className={cx('member-infor')}>
                                    <span>Họ tên: </span> <span>{thisAccount.username}</span>
                                </div>
                                <div className={cx('member-infor')}>
                                    <span>Email: </span> <span>{thisAccount.email}</span>
                                </div>
                                <div className={cx('member-infor')}>
                                    <span>Điện thoại: </span> <span>{thisAccount.phone}</span>
                                </div>
                                <div className={cx('member-infor')}>
                                    <span>Địa chỉ: </span> ...
                                </div>
                            </div>
                                )
                            }
                            {
                                tab === 2 && (
                                    <p>Không có đơn hàng nào</p>
                                )
                            }
                            {
                                tab === 3 && (
                                    <ChangePassword setThisAccount={setThisAccount} />
                                )
                            }
                            {
                                tab === 4 && (
                                    <></>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const ChangePassword = ({setThisAccount}) => {
    return (
        <div>
            <div className={cx('title')}>
                Đổi mật khẩu
            </div>
            <span>Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự</span>
            <form>
                
            </form>
        
        
        </div>
    )
}


export default Member