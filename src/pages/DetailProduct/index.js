import classNames from 'classnames/bind'
import styles from './DetailProduct.module.scss'
import { Link, Routes, useParams } from 'react-router-dom'
import data from '../../data/db.json'
import TitlePage from '../../components/TitlePage'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import Title from '../../components/Title'
import ProductItem from '../../components/ProductItem'
import routes from '../../routes'
import CartModal from '../../components/CartModal'

const cx = classNames.bind(styles)
const products = data.products
const accessorys = data.accessory

const ListSize = [36, 37, 38, 39, 40, 41, 42, 43, 44]

function DetailProduct({ cart, setCart }) {

    const { productId } = useParams()
    const { accessoryId } = useParams()
    const refListImg = useRef()

    const [state, setState] = useState(1) // quantity
    const [size, setSize] = useState('')
    const [thisSize, setThisSize] = useState()
    const [thisColor, setThisColor] = useState(0)
    const [imgIndex, setImgIndex] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    let check = true;
    let thisProduct = products.find(product => product.id == productId)
    if (accessoryId) {
        thisProduct = accessorys.find(product => product.id == accessoryId)
        check = false;
    }

    const listImg = thisProduct.img_color
    const handleSize = (element) => {
        if (thisSize) {
            thisSize.style.border = '1px solid #f5f5f5'
            thisSize.style.color = '#333'
        }
        element.style.border = '1px solid #3f3fdb'
        element.style.color = '#3f3fdb'
        setThisSize(element)
    }

    const scrollX = (list) => {
        let check = false;
        let startX, scrollLeft
        list.addEventListener('mouseleave', () => {
            check = false
        })
        list.addEventListener('mouseup', () => {
            check = false;
        })

        list.addEventListener('mousedown', (e) => {
            check = true
            startX = e.pageX - list.offsetLeft // e.pageX chính là tọa độ khi nhấn chuột xuống so với toàn page
            // list.offsetLeft chính là tọa độ của list cách 1 khoảng về phía lề bên trái
            scrollLeft = list.scrollLeft
        })
        list.addEventListener('mousemove', (e) => {
            if (!check) {
                return;
            }
            const x = e.pageX - list.offsetLeft
            const walk = x - startX
            list.scrollLeft = scrollLeft - walk
        })
    }

    const handleCart = (current) => {
        let qqt = 1;
        if (current) {
            qqt = current
        }
        if (check && size === '') {
            alert('Vui lòng chọn size')
        }

        /*
            cart = [
            {
                id,
                name,
                img_color: {
                    code,
                    color,
                    url: []
                },
                description,
                brand,
                price_main,
                price_sale,
                details: [],
                size,
                quantity
            }
        ]
        */
        else {
            let productSearch = cart.find(item => item.id == thisProduct.id &&
                item.img_color.color == thisProduct.img_color[thisColor].color &&
                item.size == size
            )
            if (productSearch) {
                setCart(pre => pre.map(item => (item.id === thisProduct.id &&
                    item.img_color.color == thisProduct.img_color[thisColor].color &&
                    item.size == size) ? 
                    { ...productSearch, quantity: productSearch.quantity + qqt}
                    : item
                ))
            }
            else {
                setCart(pre => [...pre, {...thisProduct, img_color: thisProduct.img_color[thisColor], size: size, quantity: qqt }])
            }
            setOpenModal(true)
        }
    }

    useEffect(() => {
        const list = refListImg.current
        scrollX(list)
        return () => {
            scrollX(list)
        }
    }, [])


    return (
        <div className={cx('detail')}>
            <TitlePage chidren={thisProduct.name} />
            <div className='grid wide'>
                <div className={cx('detail-section')}>
                    <div className='row'>
                        <div className='col l-6'>
                            <div className={cx('img-render')}>
                                <img src={listImg[thisColor].url[imgIndex]} />
                            </div>
                            <div className={cx('list-img')} ref={refListImg} >
                                {
                                    listImg[thisColor].url.map((urlItem, index) => {
                                        return (
                                            <div className={cx('img-item')} key={index}
                                                style={imgIndex == index ? {
                                                    border: '1px solid var(--primary-color)',
                                                    backgroundImage: `url(${urlItem})`

                                                } : {
                                                    border: '1px solid transparent',
                                                    backgroundImage: `url(${urlItem})`
                                                }}
                                                onClick={() => setImgIndex(index)}
                                            >
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
                                            <span className={cx('primary')}>
                                                {new Intl.NumberFormat().format(parseInt(thisProduct.price_sale, 10))}đ
                                            </span>
                                            <div className={cx('price-main', 'under')}>
                                                {new Intl.NumberFormat().format(parseInt(thisProduct.price_main, 10))}đ
                                            </div>
                                        </>
                                    ) : (
                                        <div className={cx('price-main', 'primary')}>
                                            {new Intl.NumberFormat().format(parseInt(thisProduct.price_main, 10))}đ
                                        </div>
                                    )
                                }
                            </div>

                            <div className={cx('product-color')}>
                                {
                                    listImg.map((item, index) => {
                                        return (
                                            <div className={cx('product-color__item')} key={item.code}
                                                style={thisColor == index ? {
                                                    borderColor: 'var(--primary-color)'
                                                } : {
                                                    borderColor: 'transparent'
                                                }}
                                            >
                                                <img src={item.url[0]} id={index}
                                                    onClick={e => setThisColor(e.target.id)}
                                                />
                                            </div>
                                        )
                                    })
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
                                    <button className={cx('add-cart')}
                                        onClick={() => {
                                            handleCart(state)
                                        }}
                                    >
                                        Thêm vào giỏ
                                    </button>
                                    <button className={cx('buy-now')}>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                            {
                                check && <div className={cx('size-product')}>
                                    <div className={cx('size-title')}>
                                        Size: <span>{size}</span>
                                    </div>
                                    <div className={cx('size-list')}>
                                        {
                                            ListSize.map((item) => {
                                                return (
                                                    <div
                                                        key={item}
                                                        className={cx('size-item')}
                                                        id={item}
                                                        onClick={e => {
                                                            handleSize(e.target)
                                                            setSize(e.target.id)
                                                        }}
                                                    >
                                                        {item}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            }
                            <Link to={routes.sizeProduct} className={cx('guide-box')}
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faClipboard} />
                                </span> Xem hướng dẫn chọn size
                            </Link>
                            <div className={cx('product-intro')}>
                                {thisProduct.description}
                            </div>
                            <div className={cx('product-color')}>
                                Màu sắc hiển thị: {listImg[thisColor].color}
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
                                products.map((product, index) => {
                                    if (index < 4) {
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
            {
                openModal && <CartModal cart={cart} setOpenModal={setOpenModal} setCart={setCart} />
            }
        </div>
    )
}

export default DetailProduct