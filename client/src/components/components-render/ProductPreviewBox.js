import React from "react";
import { Link } from "react-router-dom";

import '../components-render/component_styles/productPreviewBox.scss'

// import { BsFillHeartFill } from 'react-icons/bs'
import { IoEyeSharp } from 'react-icons/io5'

export default function ProductPreviewBox({product,index, handleClick}){
    // console.log(product.img.split(";").length);
    return (
        <Link to='#' className="relation-product-item" key={index} onClick={handleClick}>
            <img className='product-img' src={product.img.split(";").length===1?product.img[0]:product.img.split(";")[0]} alt='card'></img>
            <div className='product-infor'>
                <div className='product-name'>
                    {product.name}
                </div>
                <div className='product-detail'>
                <div className='unit-price'>
                    Giá chỉ từ {product.price}
                </div>

                <div className='number-of-favorites-box'>
                    <IoEyeSharp className='favorite-icon' />
                    <div className='number-of-favorites'>
                    {product.seen}
                    </div>

                </div>

                </div>
            </div>
        </Link>
    )
}