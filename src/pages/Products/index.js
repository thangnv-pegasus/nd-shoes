import classNames from 'classnames/bind'
import styles from './Products.module.scss'
import TitlePage from '../../components/TitlePage'
import data from '../../data/db.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

const cx = classNames.bind(styles)
const products = data.products

function Products() {

    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const refOption1 = useRef()
    const refOption2 = useRef()

    const handleHeight = (Element,check) => {
        if(check){
            Element.style.height = '0'
        }
        else{
            Element.style.height = 'unset'
        }
    }

    useEffect(()=>{
        const element = refOption1.current
        handleHeight(element,check1)

        return ()=>{

        }
    },[check1])
    useEffect(()=>{
        const element = refOption2.current
        handleHeight(element,check2)

        return ()=>{

        }
    },[check2])

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
                                        <span className={cx('open-btn')} onClick={()=>setCheck1(!check1)}>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </div>
                                    <div className={cx('sort-options')} ref={refOption1}>
                                        <label htmlFor="1">
                                            <input type="radio" id="1" name="check" checked={true} hidden onChange={(e)=>""}/>
                                            <span></span>Mặc định
                                        </label>
                                        <label htmlFor="2">
                                            <input type="radio" id="2" name="check" hidden onChange={(e)=>""}/>
                                            <span></span> Tên A-Z
                                        </label>
                                        <label htmlFor="3">
                                            <input type="radio" id="3" name="check" hidden onChange={(e)=>""}/>
                                            <span></span> Tên Z-A
                                        </label>
                                        <label htmlFor="4">
                                            <input type="radio" id="4" name="check" hidden onChange={(e)=>""}/>
                                            <span></span> Giá thấp đến cao
                                        </label>
                                        <label htmlFor="5">
                                            <input type="radio" id="5" name="check" hidden onChange={(e)=>""}/>
                                            <span></span> Giá cao đến thấp
                                        </label>
                                    </div>
                                </div>
                                <div className={cx('sort')}>
                                    <div className={cx('title')}>
                                        <p>Thương hiệu</p>
                                        <span className={cx('open-btn')} onClick={()=>setCheck2(!check2)}>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </div>
                                    <div className={cx('sort-options')} ref={refOption2}>
                                        <label htmlFor="1">
                                            <input type="radio" id="1" name="check" checked={true} hidden onChange={(e)=>""}/>
                                            <span></span>Adidas
                                        </label>
                                        <label htmlFor="2">
                                            <input type="radio" id="2" name="check" hidden onChange={(e)=>""}/>
                                            <span></span> Nike
                                        </label>
                                        <label htmlFor="3">
                                            <input type="radio" id="3" name="check" hidden onChange={(e)=>""}/>
                                            <span></span> Converse
                                        </label>
                                        <label htmlFor="4">
                                            <input type="radio" id="4" name="check" hidden onChange={(e)=>""}/>
                                            <span></span> Vans
                                        </label>
                                        <label htmlFor="5">
                                            <input type="radio" id="5" name="check" hidden onChange={(e)=>""}/>
                                            <span></span> Puma
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-9')}>
                            <div className={cx('products')}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products