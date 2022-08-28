import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function Search() {

    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()
 
    const submit = (value) => {
        navigate(`/search/${value}`)
    }

    return (
        <form className={cx('search-form')} onSubmit={()=>submit(inputValue)}>
            <input type="text" placeholder='Tìm kiếm sản phẩm...' 
                value = {inputValue}
                onChange = {(e)=>setInputValue(e.target.value)}
            />
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}

export default Search