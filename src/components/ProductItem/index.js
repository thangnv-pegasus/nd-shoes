import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown, faCartArrowDown, faHeart as Heart1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

function ProductItem({ product }) {

    const [like, setLike] = useState(false)
    const sale = false
    return (
        <div className={cx('product-item')}>
            <div className={cx('product-img')}>
                <img src={product.img_color[0].url[0]} className={cx('img-1')} />
            </div>
            <Link to={`/product/${product.id}`} className={cx('product-name')}>
                {product.name}
            </Link>
            <div className={cx('product-brand')}>
                {product.brand}
            </div>
            <div className={cx('product-price')}>
                <div className={cx('price-main')}>
                    {product.price_main}
                </div>
                {
                    product.price_sale &&
                    <div className={cx('price-sale')}>
                        {product.price_sale}
                    </div>
                }
            </div>
            <div className={cx('heart')} onClick={() => setLike(!like)}>
                {!like && <FontAwesomeIcon icon={faHeart} className={cx('heart-1')} />}
                {like && <FontAwesomeIcon icon={Heart1} className={cx('heart-2')} />}
            </div>
            <div className={cx('add-cart')}>
                <FontAwesomeIcon icon={faCartArrowDown} />
            </div>
            {
                sale &&
                <div className={cx('sale')}>
                    -30%
                </div>
            }
        </div>
    )
}

export default ProductItem