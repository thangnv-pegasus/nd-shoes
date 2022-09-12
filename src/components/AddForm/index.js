import styles from './AddForm.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function AddForm() {
    return (
        <form className={cx('add-form')}>
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Họ và tên' />
            <input type="tel" placeholder='Số điện thoại(tùy chọn)' />
            <input type="text" placeholder='Địa chỉ(tùy chọn)' />
            <textarea placeholder='Ghi chú(tùy chọn)' />
        </form> 
    )
}

export default AddForm