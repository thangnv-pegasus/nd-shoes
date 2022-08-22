import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Search() {
    return (
        <form className={cx('search-form')}>
            <input type="text" placeholder='Tìm kiếm sản phẩm...' />
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}

export default Search