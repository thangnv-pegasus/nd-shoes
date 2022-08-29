import styles from './Favorite.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../components/TitlePage'
import ProductItem from '../../components/ProductItem'

const cx = classNames.bind(styles)

function Favorite({favoriteProducts,setFavoriteProducts}){
    return(
        <div className={cx('favorite')}>
            <TitlePage chidren="Yêu thích" />
            <div className='grid wide'>
                <div className={cx('title')}>
                    Danh sách yêu thích của tôi
                    {
                        favoriteProducts.length == 0 && (
                            <div>
                                Bạn chưa có sản phẩm yêu thích
                            </div>
                        )
                    }
                </div>
                <div className='row'>
                    {
                        favoriteProducts.length > 0 && (
                            favoriteProducts.map((product,index)=>{
                                return (
                                    <div className='col l-3' key={index}>
                                        <ProductItem 
                                            product={product}
                                            setFavoriteProducts={setFavoriteProducts}
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