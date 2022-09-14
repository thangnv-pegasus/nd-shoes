import styles from './AddForm.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function AddForm(props) {

    const { name, setName, phone, setPhone, mail, setMail, address, setAddress, note, setNote } = props

    return (
        <form className={cx('add-form')}>
            <input type="email" placeholder='Email'
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />
            <input type="text" placeholder='Họ và tên'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input type="tel" placeholder='Số điện thoại(tùy chọn)'
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <input type="text" placeholder='Địa chỉ(tùy chọn)'
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <textarea placeholder='Ghi chú(tùy chọn)'
                value={note}
                onChange={e => setNote(e.target.value)}
            />
        </form>
    )
}

export default AddForm