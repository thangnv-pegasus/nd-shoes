import className from 'classnames/bind'
import styles from './Banner.module.scss'
import data from '../../data/db.json'
import { useReducer, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const cx = className.bind(styles)


function Banner() {
    
    const banners = data.banner
    const initState = 0;
    const next = 'NEXT'
    const pre = 'PRE'
    
    const reducer = (current,action) => {
        switch (action) {
            case 'PRE':
                if(current>0){
                    return current - 1;
                }
                else{
                    return 3;
                }
            case 'NEXT':
                if(current < banners.length-1){
                    return current + 1;
                }
                else{
                    return 0;
                }
            default: 
                throw new Error('Lỗi!')
        }
    }

    const [current, dispatch] = useReducer(reducer, initState)
    let imgUrl = `url(${banners[current]})`

    return (
        <div className={cx('banner')} style={{
            backgroundImage: imgUrl
        }}>
            <div className={cx('control', 'control-right')} onClick = {()=>dispatch(next)}>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className={cx('control', 'control-left')} onClick = {()=>dispatch(pre)}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </div>
        </div>
    )
}

export default Banner