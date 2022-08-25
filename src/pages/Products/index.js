import classNames from 'classnames/bind'
import styles from './Products.module.scss'
import TitlePage from '../../components/TitlePage'

const cx = classNames.bind(styles)

function Products(){
    return (
        <div className={cx('product-page')}>
            <TitlePage chidren='Tất cả sản phẩm' />
        </div>
    )
}

export default Products