import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as Heart1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

function ProductItem({img_src,name,brand,price,sale}) {

    const [like, setLike] = useState(false)

    return (
        <div className={cx('product-item')}>
            <div className={cx('product-img')}>
                <img src={img_src} className={cx('img-1')} />
            </div>
            <Link to="" className={cx('product-name')}>
                {name}
            </Link>
            <div className={cx('product-brand')}>
                {brand}
            </div>
            <div className={cx('product-price')}>
                {price}
            </div>
            <div className={cx('heart')} onClick={() => setLike(!like)}>
                {!like && <FontAwesomeIcon icon={faHeart} className={cx('heart-1')} />}
                {like && <FontAwesomeIcon icon={Heart1} className={cx('heart-2')} />}
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