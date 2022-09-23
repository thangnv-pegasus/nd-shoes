import classNames from 'classnames/bind'
import styles from './Products.module.scss'
import TitlePage from '../../components/TitlePage'
import data from '../../data/db.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import ProductItem from '../../components/ProductItem'
import { useParams } from 'react-router-dom'

const cx = classNames.bind(styles)
const products = data.products
const accessorys = data.accessory

const sortList = ['Mặc định', 'Tên A-z', 'Tên Z-A', 'Giá cao đến thấp', 'Giá thấp đến cao']

function Products() {

    const { classI } = useParams()
    let thisData = products
    if (classI == 'accessory') { thisData = accessorys }

    const [check1, setCheck1] = useState(false) //đóng mở menu1 trong sidebar
    const [check2, setCheck2] = useState(false) // đóng mở menu2 trong sidebar 
    const [check3, setCheck3] = useState(false) // đóng mở menu3 trong sidebar
    const refOption1 = useRef()
    const refOption2 = useRef()
    const refOption3 = useRef()
    const [productsRender, setProductsRender] = useState(thisData)
    const [sort1, setSort1] = useState(0)
    const [thisBrand, setThisBrand] = useState()

    const splitProduct = (list, x) => {
        let array = list
        let newArr = []
        let i = 0
        for (i; i < array.length; i += x) {
            let temp = array.slice(i, i + x)
            newArr.push(temp)
        }
        return newArr
    }

    let pageNumber = splitProduct(productsRender, 9);
    const [thisPage, setThisPage] = useState(1)

    const handleHeight = (Element, check) => {
        if (check) {
            Element.style.height = '0'
        }
        else {
            Element.style.height = 'unset'
        }
    }

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

    // filter
    const SortByBrand = (brand) => {
        switch (brand.toLowerCase()) {
            case 'adidas':
                setProductsRender(thisData.filter(item => item.brand.toLowerCase() === 'adidas'))
                setThisBrand(productsRender)
                break;
            case 'nike':
                setProductsRender(thisData.filter(item => item.brand.toLowerCase() === 'nike'))
                setThisBrand(productsRender)
                break;
            case 'converse':
                setProductsRender(thisData.filter(item => item.brand.toLowerCase() === 'converse'))
                setThisBrand(productsRender)
                break;
            case 'vans':
                setProductsRender(thisData.filter(item => item.brand.toLowerCase() === 'vans'))
                setThisBrand(productsRender)
                break;
            case 'puma':
                setProductsRender(thisData.filter(item => item.brand.toLowerCase() === 'puma'))
                setThisBrand(productsRender)
                break;
            case 'fila':
                setProductsRender(thisData.filter(item => item.brand.toLowerCase() === 'fila'))
                setThisBrand(productsRender)
                break
            case 'mlb':
                setProductsRender(thisData.filter(item => item.brand.toLowerCase() === 'mlb'))
                setThisBrand(productsRender)
                break;
            case 'new balance':
                setProductsRender(thisData.filter(item => item.brand.toLowerCase() === 'new balance'))
                setThisBrand(productsRender)
                break;
        }
    }

    const handleSort1 = (current) => {
        switch (current) {
            case 0:
                setProductsRender([...thisData])
                break;
            case 1:
                setProductsRender(pre => [...pre.sort((a, b) => a.name.localeCompare(b.name))])
                break;
            case 2:
                setProductsRender(pre => [...pre.sort((a, b) => b.name.localeCompare(a.name))])
                break;
            case 3:
                setProductsRender(pre => [...pre.sort((a, b) => {
                    if (a.price_sale && b.price_sale) {
                        return Number(a.price_sale) - Number(b.price_sale)
                    } else if (a.price_sale) {
                        return Number(a.price_sale) - Number(b.price_main)
                    }
                    else if (b.price_sale) {
                        return Number(a.price_main) - Number(b.price_sale)
                    }
                    else {
                        return a.price_main - b.price_main
                    }
                })])
                break;
            case 4:
                setProductsRender(pre => [...pre.sort((a, b) => {
                    if (a.price_sale && b.price_sale) {
                        return Number(b.price_sale) - Number(a.price_sale)
                    } else if (a.price_sale) {
                        return Number(b.price_main) - Number(a.price_sale)
                    }
                    else if (b.price_sale) {
                        return Number(b.price_sale) - Number(a.price_main)
                    }
                    else {
                        return Number(b.price_main) - Number(a.price_main)
                    }
                })])
                break;
            case 5:
                setProductsRender(pre => [...pre.sort((a, b) => {
                    if (a.price_sale && b.price_sale) {
                        return Number(b.price_sale) - Number(a.price_sale)
                    } else if (a.price_sale) {
                        return Number(b.price_main) - Number(a.price_sale)
                    }
                    else if (b.price_sale) {
                        return Number(b.price_sale) - Number(a.price_main)
                    }
                    else {
                        return Number(b.price_main) - Number(a.price_main)
                    }
                })])
                break;
        }
    }

    // < 1m
    const SortByPriceLow = () => {
        setProductsRender([productsRender.filter(item => {
            if (item.price_sale == 'null') {
                return (Number(item.price_sale) < 1000000)
            }
            else {
                return (Number(item.price_main) < 1000000)
            }
        })])
        setThisPage(1)
    }

    // 1m - 3m
    const SortByPriceMedium = () => {
        setProductsRender([productsRender.filter(item => {
            if (item.price_sale) {
                return (Number(item.price_sale) >= 1000000 && Number(item.price_sale) < 3000000)
            }
            else {
                return Number(item.price_main) >= 1000000 && Number(item.price_main) < 3000000
            }
        })])
        setThisPage(1)
    }

    // 3m - 5m
    const SortByPriceNormal = () => {
        setProductsRender([productsRender.filter(item => {
            if (item.price_sale) {
                return Number(item.price_sale) >= 3000000 && Number(item.price_sale) < 5000000
            }
            else {
                return Number(item.price_main) >= 3000000 && Number(item.price_main) < 5000000
            }
        })])
        setThisPage(1)
    }

    // 5m - 10m
    const SortByPriceHigh = () => {
        setProductsRender([productsRender.filter(item => {
            if (item.price_sale) {
                return Number(item.price_sale) >= 5000000 && Number(item.price_sale) < 10000000
            }
            else {
                return Number(item.price_main) >= 5000000 && Number(item.price_main) < 10000000
            }
        })])
        setThisPage(1)
    }

    // > 10m
    const SortByPriceMaxLV = () => {
        setProductsRender([productsRender.filter(item => {
            if (item.price_sale) {
                return Number(item.price_sale) >= 10000000
            }
            else {
                return Number(item.price_main) >= 10000000
            }
        })])
        setThisPage(1)
    }


    return (
        <div className={cx('product-page')}>
            <TitlePage chidren='Tất cả sản phẩm' />
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
                                        {
                                            sortList.map((item, index) => {
                                                return (
                                                    <label key={index}>
                                                        <input type="radio" name="check" hidden onChange={() => {
                                                            setSort1(index)
                                                            handleSort1(index)
                                                        }}
                                                            checked={index == sort1}
                                                        />
                                                        <span></span>
                                                        {item}
                                                    </label>
                                                )
                                            })
                                        }
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
                                            <input type="radio" name="check2" hidden onChange={() => SortByBrand('adidas')} />
                                            <span></span>Adidas
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden onChange={() => SortByBrand('nike')} />
                                            <span></span> Nike
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden onChange={() => SortByBrand('converse')} />
                                            <span></span> Converse
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden onChange={() => SortByBrand('vans')} />
                                            <span></span> Vans
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden onChange={() => SortByBrand('puma')} />
                                            <span></span> Puma
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden onChange={() => SortByBrand('fila')} />
                                            <span></span> Fila
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden onChange={() => SortByBrand('mlb')} />
                                            <span></span> MLB
                                        </label>
                                        <label>
                                            <input type="radio" name="check2" hidden onChange={() => SortByBrand('new balance')} />
                                            <span></span> New Balance
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
                                            <input type="radio" id="1" name="check3" hidden onChange={() => SortByPriceLow()} />
                                            <span></span>Giá dưới 1.000.000đ
                                        </label>
                                        <label>
                                            <input type="radio" id="2" name="check3" hidden onChange={() => SortByPriceMedium()} />
                                            <span></span> 1.000.000đ - 3.000.000đ
                                        </label>
                                        <label>
                                            <input type="radio" id="3" name="check3" hidden onChange={() => SortByPriceNormal()} />
                                            <span></span> 3.000.000đ - 5.000.000đ
                                        </label>
                                        <label>
                                            <input type="radio" id="4" name="check3" hidden onChange={() => SortByPriceHigh()} />
                                            <span></span> 5.000.000đ - 10.000.000đ
                                        </label>
                                        <label>
                                            <input type="radio" id="5" name="check3" hidden onChange={() => SortByPriceMaxLV()} />
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
                                        pageNumber.length > 0 && pageNumber[thisPage - 1].map((product, index) => {
                                            if (index < 9) {
                                                return (
                                                    <div className='col l-4' key={index}>
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
                            <ul className={cx('list-page')}>
                                {
                                    pageNumber.map((item, index) => {
                                        return (
                                            <li key={index} className={cx('page-number')} style={index + 1 === thisPage ? {
                                                backgroundColor: '#3f3fdb',
                                                color: 'var(--white-color)'
                                            } : {
                                                backgroundColor: 'var(--white-color)',
                                                color: 'var(--text-color)'
                                            }}
                                                onClick={() => setThisPage(index + 1)}
                                            >
                                                {index + 1}
                                            </li>
                                        )
                                    })
                                }
                                <li className={cx('next-page')} onClick={() => setThisPage(pre => {
                                    if (pre < pageNumber.length) {
                                        return pre + 1
                                    }
                                    else {
                                        return 1
                                    }
                                })}>
                                    &gt;
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products