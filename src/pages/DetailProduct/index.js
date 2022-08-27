import classNames from 'classnames/bind'
import styles from './DetailProduct.module.scss'
import { Link, useParams } from 'react-router-dom'
import data from '../../data/db.json'
import TitlePage from '../../components/TitlePage'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import Title from '../../components/Title'
import ProductItem from '../../components/ProductItem'

const cx = classNames.bind(styles)
const products = data.products

function DetailProduct() {

    const { productId } = useParams()

    const [state, setState] = useState(1)

    const thisProduct = products.find(product => product.id == productId)
    const listImg = thisProduct.img_color

    return (
        <div className={cx('detail')}>
            <TitlePage chidren={thisProduct.name} />
            <div className='grid wide'>
                <div className={cx('detail-section')}>
                    <div className='row'>
                        <div className='col l-6'>
                            <div className={cx('img-render')}>
                                <img src={listImg[0].url[0]} />
                            </div>
                            <div className={cx('list-img')}>
                                {
                                    listImg[0].url.map((urlItem, index) => {
                                        return (
                                            <div className={cx('img-item')} key={index}>
                                                <img src={urlItem} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='col l-6'>
                            <div className={cx('product-name')}>
                                {thisProduct.name}
                            </div>
                            <div className={cx('product-auth')}>
                                <div>
                                    Thương hiệu: <span>{thisProduct.brand}</span>
                                </div>
                                <div>
                                    Mã: <span>{thisProduct.id}</span>
                                </div>
                            </div>
                            <div className={cx('product-price')}>
                                {
                                    thisProduct.price_sale ? (
                                        <>
                                            <span className={cx('primary')}> {thisProduct.price_sale}đ </span>
                                            <div className={cx('price-main', 'under')}>
                                                {thisProduct.price_main}đ
                                            </div>
                                        </>
                                    ) : (
                                        <div className={cx('price-main', 'primary')}>
                                            {thisProduct.price_main}đ
                                        </div>
                                    )
                                }
                            </div>
                            <div className={cx('product-action')}>
                                <div className={cx('product-quantity')}>
                                    <div className={cx('number')}>
                                        {state}
                                    </div>
                                    <div className={cx('action')}>
                                        <button onClick={() => setState(state + 1)}>
                                            +
                                        </button>
                                        <button onClick={() => setState(pre => {
                                            if (state > 1) {
                                                return state - 1
                                            }
                                            return 1;
                                        })}>
                                            -
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('order')}>
                                    <button className={cx('add-cart')}>
                                        Thêm vào giỏ
                                    </button>
                                    <button className={cx('buy-now')}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                            <Link to="" className={cx('guide-box')} onClick={()=>window.scrollTo(0,0)}>
                                <span>
                                    <FontAwesomeIcon icon={faClipboard} />
                                </span> Xem hướng dẫn chọn size
                            </Link>
                            <div className={cx('product-intro')}>
                                {thisProduct.description}
                            </div>
                            <div className={cx('product-color')}>
                                Màu sắc hiển thị: {listImg[0].color}
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-detail')}>
                        <div className={cx('detail-title')}>
                            Thông tin chi tiết
                        </div>
                        <div className={cx('detail-box')}>
                            {
                                thisProduct.detais.map((detailI, index) => {
                                    return (
                                        <div className={cx('box-item')} key={index}>
                                            <div className={cx('box-title')}>
                                                {detailI.title}
                                            </div>
                                            <div className={cx('box-content')}>
                                                {detailI.content}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={cx('similar-product')}>
                        <Title slogan='Các sản phẩm tương tự'>
                            Sản phẩm tương tự
                        </Title>
                        <div className='row'>
                            {
                                products.map(product =>{
                                    if(product.id<5){
                                        return (
                                            <div className='col l-3' key={product.id}>
                                                <ProductItem product={product} />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct