import styles from './Favorite.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../components/TitlePage'
import ProductItem from '../../components/ProductItem'

const cx = classNames.bind(styles)

function Favorite() {
    const listFavorite = []
    return (
        <div className={cx('favorite')}>
            <TitlePage chidren="Yêu thích" />
            <div className='grid wide'>
                <div className={cx('title')}>
                    Danh sách yêu thích của tôi
                    {
                        listFavorite.length == 0 && (
                            <div>
                                Bạn chưa có sản phẩm yêu thích
                            </div>
                        )
                    }
                </div>
                <div className='row'>
                    {
                        listFavorite.length > 0 && (
                            listFavorite.map((product, index) => {
                                return (
                                    <div className='col l-3' key={index}>
                                        <ProductItem
                                            product={product}
                                            // handleFavoriteSneaker={handleFavoriteSneaker}
                                        />
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>

    )
}


export default Favorite