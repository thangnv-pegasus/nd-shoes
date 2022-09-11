import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown, faCartArrowDown, faHeart as Heart1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

function ProductItem({ product, setAllProduct, allProduct }) {
    const sale = (product.price_sale / product.price_main) * 100;

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
                // console.log(allProduct[i].favorite)
                break;
            }
        }
        if (check) {
            setAllProduct(pre =>
                pre.map(productI =>
                    productI.id === product.id ? { ...productI, favorite: false } : productI
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
                handleFavorite()
            }}>
                {!product.favorite && <FontAwesomeIcon icon={faHeart} className={cx('heart-1')} />}
                {product.favorite && <FontAwesomeIcon icon={Heart1} className={cx('heart-2')} />}
            </div>
            {
                (sale) ?
                    (<div className={cx('sale')}>
                        {100-sale.toFixed(0)}%
                    </div>) : (<></>)
            }
        </div>
    )
}

export default ProductItem