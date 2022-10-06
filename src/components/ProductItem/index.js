import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown, faCartArrowDown, faHeart as Heart1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import styles from './ProductItem.module.scss'
import data from '../../data/db.json'

const cx = classNames.bind(styles)
const products = data.products

function ProductItem({ product, handleFavoriteSneaker }) {
    const sale = (product.price_sale / product.price_main) * 100;
    const navigate = useNavigate();

    let to = ''
    if (product.class) {
        to = `/accessory/detail/${product.id}`
    }
    else {
        to = `/product/${product.id}`
    }

    const urlImg = `url(${product.img_color[0].url[0]})`

    return (
        <div className={cx('product-item')}>
            <div className={cx('product-img')} 
                style={{
                    backgroundImage: urlImg,
                    backgroundSize:'cover',
                    backgroundPosition: 'center'
                }}
                onClick={() =>{ 
                    window.scrollTo(0, 0)
                    navigate(to)
                }}
            >
            </div>
            <div to={to} className={cx('product-name')} 
                onClick={() =>{ 
                    window.scrollTo(0, 0)
                    navigate(to)
                }}
            >
                {product.name}
            </div>
            <div className={cx('product-brand')}>
                {product.brand}
            </div>
            <div className={cx('product-price')}>
                {
                    product.price_sale ? (
                        <>
                            <div className={cx('price-sale', 'no-under')}>
                                {new Intl.NumberFormat().format(parseInt(product.price_sale, 10))}đ
                            </div>
                            <div className={cx('price-main')}>
                                {new Intl.NumberFormat().format(parseInt(product.price_main, 10))}đ
                            </div>
                        </>
                    ) : (
                        <div className={cx('price-main', 'no-under')}>
                            {new Intl.NumberFormat().format(parseInt(product.price_main, 10))}đ
                        </div>
                    )
                }


            </div>
            <div className={cx('heart')} onClick={() => {
                handleFavoriteSneaker(product)
            }}>
                {!product.favorite && <FontAwesomeIcon icon={faHeart} className={cx('heart-1')} />}
                {product.favorite && <FontAwesomeIcon icon={Heart1} className={cx('heart-2')} />}
            </div>
            {
                (sale) ?
                    (<div className={cx('sale')}>
                        -{100-sale.toFixed(0)}%
                    </div>) : (<></>)
            }
        </div>
    )
}

export default ProductItem