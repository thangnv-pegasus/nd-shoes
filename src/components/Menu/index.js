import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from './Menu.module.scss'
import routes from "../../routes";


const cx = classNames.bind(styles)


const Menu = () => {
    const [openList, setOpenList] = useState(false)
    const [openModal, setOpenModal] = useState(true)

    const handleDown = () => {
        setOpenList(!openList)
    }

    return (
        <div className={cx('menu-modal')} style={openModal ? ({display:'block'}): ({display:'none'})}>
            <ul className={cx('menu')}>
                <li>
                    <a href={routes.home}>Trang chủ</a>
                </li>
                <li>
                    <a href={routes.intro}>Giới thiệu</a>
                </li>
                <li className={cx('sub-menu')}>
                    <div className={cx('flex')}>
                        <a href={routes.products}>Sản phẩm</a>
                        <span onClick={handleDown}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </div>
                    <ul className={cx('list-brand')} style={openList ? ({ display: 'block' }) : ({ display: 'none' })}>
                        <li>
                            <a href={`/productKind/${'Adidas'}`}>Adidas</a>
                        </li>
                        <li>
                            <a href={`/productKind/${'Nike'}`}>Nike</a>
                        </li>
                        <li>
                            <a href={`/productKind/${'Converse'}`}>Converse</a>
                        </li>
                        <li>
                            <a href={`/productKind/${'Vans'}`}>Vans</a>
                        </li>
                        <li>
                            <a href={`/productKind/${'Puma'}`}>Puma</a>
                        </li>
                        <li>
                            <a href={`/productKind/${'Fila'}`}>FILA</a>
                        </li>
                        <li>
                            <a href={`/productKind/${'MLB'}`}>MLB</a>
                        </li>
                        <li>
                            <a href={`/productKind/${'New Balance'}`}>New Balance</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href={routes.news}>Tin tức</a>
                </li>
                <li>
                    <a href={routes.contact}>Liên hệ</a>
                </li>
                <div className={cx('close-icon')} onClick={()=>setOpenModal(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </ul>
        </div>
    )
}


export default Menu