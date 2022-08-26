import classNames from 'classnames/bind'
import styles from './Accessory.module.scss'
import TitlePage from '../../components/TitlePage'
import data from '../../data/db.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import ProductItem from '../../components/ProductItem'

const cx = classNames.bind(styles)
const products = data.accessory.filter(item => item.class.toLowerCase() === 'bag')

function AccessoryItem() {

    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const refOption1 = useRef()
    const refOption2 = useRef()
    const refOption3 = useRef()
    const [productsRender, setProductsRender] = useState(products)

    const handleHeight = (Element, check) => {
        if (check) {
            Element.style.height = '0'
        }
        else {
            Element.style.height = 'unset'
        }
    }

    const splitProduct = (list, x) => {
        let newArr = []
        let i = 0
        for (i; i < list.length; i = i + x) {
            let temp = list.splice(i, i + x)
            newArr.push(temp)
        }
        return newArr
    }

    // const PageProduct = splitProduct(productsRender, 9)

    useEffect(() => {
        const element = refOption1.current
        handleHeight(element, check1)

        return () => {

        }
    }, [check1])
    useEffect(() => {
        const element = refOption2.current
        handleHeight(element, check2)

        return () => {

        }
    }, [check2])
    useEffect(() => {
        const element = refOption3.current
        handleHeight(element, check3)

        return () => {

        }
    }, [check3])
    return (
        <div className={cx('product-page')}>
            <TitlePage chidren='Balo - Túi' />
            <div className='grid wide'>
                <div className={cx('page-section')}>
                    <div className='row'>
                        <div className={cx('col l-3')}>
                            <div className={cx('bar')}>
                                <div className={cx('sort')}>
                                    <div className={cx('title')}>
                                        <p>Sắp xếp</p>
                                        <span className={cx('open-btn')} onClick={() => setCheck1(!check1)}>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </div>
                                    <div className={cx('sort-options')} ref={refOption1}>
                                        <label>
                                            <input type="radio" id="1" name="check" hidden />
                                            <span></span>
                                            Mặc định
                                        </label>
                                        <label>
                                            <input type="radio" id="2" name="check" hidden />
                                            <span></span>
                                            Tên A-Z
                                        </label>
                                        <label>
                                            <input type="radio" id="3" name="check" hidden />
                                            <span></span>
                                            Tên Z-A
                                        </label>
                                        <label>
                                            <input type="radio" id="4" name="check" hidden />
                                            <span></span>
                                            Giá thấp đến cao
                                        </label>
                                        <label>
                                            <input type="radio" id="5" name="check" hidden />
                                            <span></span>
                                            Giá cao đến thấp
                                        </label>
                                    </div>
                                </div>
                                <div className={cx('sort')}>
                                    <div className={cx('title')}>
                                        <p>Thương hiệu</p>
                                        <span className={cx('open-btn')} onClick={() => setCheck2(!check2)}>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </div>
                                    <div className={cx('sort-options')} ref={refOption2}>
                                        <label>
                                            <input type="radio" name="check2" hidden />
                                            <span></span>Adidas
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden />
                                            <span></span> Nike
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden />
                                            <span></span> Converse
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden />
                                            <span></span> Vans
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden />
                                            <span></span> Puma
                                        </label>
                                    </div>
                                </div>
                                <div className={cx('sort')}>
                                    <div className={cx('title')}>
                                        <p>Giá sản phẩm</p>
                                        <span className={cx('open-btn')} onClick={() => setCheck3(!check3)}>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </div>
                                    <div className={cx('sort-options')} ref={refOption3}>
                                        <label>
                                            <input type="radio" id="1" name="check3" hidden />
                                            <span></span>Giá dưới 1.000.000đ
                                        </label>
                                        <label>
                                            <input type="radio" id="2" name="check3" hidden />
                                            <span></span> 1.000.000đ - 3.000.000đ
                                        </label>
                                        <label>
                                            <input type="radio" id="3" name="check3" hidden />
                                            <span></span> 3.000.000đ - 5.000.000đ
                                        </label>
                                        <label>
                                            <input type="radio" id="4" name="check3" hidden />
                                            <span></span> 5.000.000đ - 10.000.000đ
                                        </label>
                                        <label>
                                            <input type="radio" id="5" name="check3" hidden />
                                            <span></span> Giá trên 10.000.000đ
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-9')}>
                            <div className={cx('products')}>
                                <div className='row'>
                                    {
                                        productsRender.map((product) => {
                                            if (product.id < 10) {
                                                return (
                                                    <div className='col l-4' key={product.id}>
                                                        <ProductItem
                                                            product={product}
                                                        />
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
            </div>
        </div>
    )
}

export default AccessoryItem