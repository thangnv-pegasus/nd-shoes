import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import styles from './SearchPage.module.scss'
import TitlePage from '../../components/TitlePage'
import data from '../../data/db.json'
import ProductItem from "../../components/ProductItem";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
const products = data.products

function SearchPage() {

    const { searchValue } = useParams()

    const result = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))

    const pageNumber = (x) => {
        let i = 0;
        let newArr = []
        for (i; i < result.length; i += x) {
            let temp = result.slice(i, i + x)
            newArr.push(temp)
        }
        return newArr
    }

    const newArr = pageNumber(8)

    const [page, setPage] = useState(0)

    return (
        <div className={cx('search-page')}>
            <TitlePage chidren={`${searchValue} - ND Shoes`} />
            <div className="grid wide">
                <div className={cx('search-page__section')}>
                    <div className={cx('title-page')}>
                        {
                            result.length > 0 ? (
                                <>
                                    Tìm thấy {result.length} Kết quả với từ khóa "{searchValue}"
                                </>
                            ) : (
                                <>
                                    Không tìm thấy kết quả nào với từ khóa trên
                                </>
                            )
                        }
                    </div>
                    {
                        result.length > 0 &&
                        <>
                            <div className="row">
                                {
                                    newArr[page].map(product => {
                                        return (
                                            <div className="col l-3 m-4 c-6" key={product.id}>
                                                <ProductItem product={product} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={cx('page-number')}>
                                {
                                    newArr.map((arr, index) => {
                                        return (
                                            <div className={cx('page-item')} key={index}
                                                style={page === index ? {
                                                    backgroundColor: '#3f3fdb',
                                                    color: '#fff'
                                                } : {}}
                                                onClick={(e) => setPage(index)}
                                            >
                                                {index + 1}
                                            </div>
                                        )
                                    })
                                }
                                <div className={cx('next-page', 'page-item')}
                                    onClick={() => setPage(pre => {
                                        if (pre < newArr.length - 1) {
                                            return page + 1
                                        }
                                        return 0;
                                    })}
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage