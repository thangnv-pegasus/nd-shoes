import classNames from 'classnames/bind'
import styles from './ProductKind.module.scss'
import TitlePage from '../../components/TitlePage'
import data from '../../data/db.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import ProductItem from '../../components/ProductItem'
import { useParams } from 'react-router-dom'

const cx = classNames.bind(styles)

const sortList = ['Mặc định', 'Tên A-z', 'Tên Z-A', 'Giá cao đến thấp', 'Giá thấp đến cao']

const sortPrice = [
    {
        title: 'Tất cả',
        value: 'all'
    },
    {
        title: 'Giá dưới 1.000.000đ',
        value: '1'
    },
    {
        title: '1.000.000đ - 3.000.000đ',
        value: '2'
    },
    {
        title: '3.000.000đ - 5.000.000đ',
        value: '3'
    },
    {
        title: '5.000.000đ - 10.000.000đ',
        value: '4'
    },
    {
        title: 'Giá trên 10.000.000đ',
        value: '5'
    }
]

const products = data.products

function ProductKind() {

    const { kind } = useParams()

    const thisData = products.filter(product => product.brand.toLowerCase() === kind)

    const [check1, setCheck1] = useState(false) //đóng mở menu1 trong sidebar
    const [check3, setCheck3] = useState(false) // đóng mở menu3 trong sidebar
    const refOption1 = useRef()
    const refOption3 = useRef()
    const [productsRender, setProductsRender] = useState(() => [...thisData])
    const [sort1, setSort1] = useState(0) // định nghĩa vị trí mặc định của khung sắp xếp theo tên
    const [sort3, setSort3] = useState(0) // định nghĩa vị trí mặc định của khung sắp xếp theo price

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

    const pageNumber = splitProduct(thisData, 9)
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
        const element = refOption3.current
        handleHeight(element, check3)

        return () => {

        }
    }, [check3])

    // filter
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

    const SortByPrice = (value) => {
        switch (value) {
            case 'all':
                setProductsRender([...thisData])
                break;
            case '1':
                setProductsRender([...thisData.filter(item => {
                    if (item.price_sale) {
                        return (Number(item.price_sale) < 1000000)
                    }
                    else {
                        return (Number(item.price_main) < 1000000)
                    }
                })])
                break;
            case '2':
                setProductsRender([...thisData.filter(item => {
                    if (item.price_sale) {
                        return (Number(item.price_sale) >= 1000000 && Number(item.price_sale) < 3000000)
                    }
                    else {
                        return Number(item.price_main) >= 1000000 && Number(item.price_main) < 3000000
                    }
                })])
                break;
            case '3':
                setProductsRender([...thisData.filter(item => {
                    if (item.price_sale) {
                        return Number(item.price_sale) >= 3000000 && Number(item.price_sale) < 5000000
                    }
                    else {
                        return Number(item.price_main) >= 3000000 && Number(item.price_main) < 5000000
                    }
                })])
                break;
            case '4':
                setProductsRender([...thisData.filter(item => {
                    if (item.price_sale) {
                        return Number(item.price_sale) >= 5000000 && Number(item.price_sale) < 10000000
                    }
                    else {
                        return Number(item.price_main) >= 5000000 && Number(item.price_main) < 10000000
                    }
                })])
                break;
            case '5':
                setProductsRender([...thisData.filter(item => {
                    if (item.price_sale) {
                        return Number(item.price_sale) >= 10000000
                    }
                    else {
                        return Number(item.price_main) >= 10000000
                    }
                })])
                break;
        }
        setThisPage(1)
    }

    return (
        <div className={cx('product-page')}>
            <TitlePage chidren={kind} />
            <div className='grid wide'>
                <div className={cx('page-section')}>
                    <div className='row'>
                        <div className={cx('col l-3 m-0 c-0')}>
                            <div className={cx('bar')}>
                                {/* sort-by-name */}
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
                                                            checked={index === sort1}
                                                        />
                                                        <span></span>
                                                        {item}
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                {/* sort-by-price */}
                                <div className={cx('sort')}>
                                    <div className={cx('title')}>
                                        <p>Giá sản phẩm</p>
                                        <span className={cx('open-btn')} onClick={() => setCheck3(!check3)}>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </div>
                                    <div className={cx('sort-options')} ref={refOption3}>
                                        {
                                            sortPrice.map((item, index) => {
                                                return (
                                                    <label key={index}>
                                                        <input type="radio" id={index} name="check3" hidden
                                                            onChange={() => {
                                                                SortByPrice(`${item.value}`)
                                                                setSort3(index)
                                                            }}
                                                            checked={index === sort3}
                                                        />
                                                        <span></span>{item.title}
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-9 m-12 c-12')}>
                            <div className={cx('products')}>
                                <div className='row'>
                                    {
                                        (pageNumber.length > 0) ? (
                                            pageNumber[thisPage - 1].map((product, index) => {
                                                if (index < 9) {
                                                    return (
                                                        <div className='col l-4 m-3 c-6' key={index}>
                                                            <ProductItem
                                                                product={product}
                                                            // handleFavoriteSneaker={handleFavoriteSneaker}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            })
                                        ) : (
                                            <></>
                                        )
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

export default ProductKind

