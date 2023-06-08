import React from "react";
import './component_styles/orderedProductDetail.scss'

export default function OrderedProductDetail({product_infor}){
    // console.log(product_infor.name);
    return (
        <div className="product-item">
            <div className="product-name">
                <p className="name">
                    {product_infor.name}
                </p>
            </div>
            <div className="product-detail">
                <div className="material option">
                    <p className="title">Chất liệu:</p>
                    <p className="value">
                        {product_infor.material==="non"?"Không có":product_infor.material}
                    </p>
                </div>
                <div className="effect option">
                    <p className="title">Hiệu ứng:</p>
                    <p className="value">
                        {product_infor.effect==="non"?"Không có":product_infor.effect}
                    </p>
                </div>
                <div className="sides option">
                    <p className="title">Số mặt in:</p>
                    <p className="value">
                        {product_infor.sides==="non"?"Không có":product_infor.sides}
                    </p>
                </div>
                <div className="size option">
                    <p className="title">Kích thước:</p>
                    <p className="value">
                        {product_infor.size==="non"?"Không có":product_infor.size}
                    </p>
                </div>
                <div className="quantity option">
                    <p className="title">Số lượng:</p>
                    <p className="value">
                        {product_infor.quantity==="non"?"Không có":product_infor.quantity}
                    </p>
                </div>
                <div className="have-designed option">
                    <p className="single-value">
                        {product_infor.isDesigned} bản thiết kế.
                    </p>
                </div>

                <div className="img-src option">
                    <p className="title">Link ảnh:</p>
                    <p className="value">
                        {product_infor.img_src==="undefined"?"Không có":product_infor.img_src} 
                    </p>
                </div>
            </div>
            
        </div>

    )
}