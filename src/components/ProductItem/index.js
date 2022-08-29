import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown, faCartArrowDown, faHeart as Heart1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

function ProductItem({ product, setCart, setAllProduct, allProduct }) {

    const sale = false

    let to = ''
    if (product.class) {
        to = `/accessory/detail/${product.id}`
    }
    else {
        to = `/product/${product.id}`
    }

    const handleFavorite = () => {
        let check = false
        for (let i = 0; i < allProduct.length; i++) {
            if (allProduct[i].favorite == 'true' && allProduct[i].id === product.id) {
                check = true;
                console.log(allProduct[i].favorite)
                break;
            }
        }
        if (check) {
            setAllProduct(pre =>
                pre.map(productI =>
                    productI.id === product.id && { ...productI, favorite: false }
                )
            )
        } else {
            setAllProduct(pre =>
                pre.map(productI =>
                    productI.id === product.id ? { ...productI, favorite: true } : productI)
            )
        }
    }


    return (
        <div className={cx('product-item')}>
            <div className={cx('product-img')}>
                <img src={product.img_color[0].url[0]} className={cx('img-1')} />
            </div>
            <Link to={to} className={cx('product-name')} onClick={() => window.scrollTo(0, 0)}>
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
            <div className={cx('heart')} onClick={() => {
                handleFavorite()
            }}>
                {!product.favorite && <FontAwesomeIcon icon={faHeart} className={cx('heart-1')} />}
                {product.favorite && <FontAwesomeIcon icon={Heart1} className={cx('heart-2')} />}
            </div>
            <div className={cx('add-cart')}
                onClick={() => setCart(product)}
            >
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