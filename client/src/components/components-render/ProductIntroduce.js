import React, { useState } from "react";
import DescriptionRender from "./DescriptionReder";

export default function ProductIntroduce({productInfor}){

    const [contentRender, setContentRender] = useState("intro") 

    return (
        <div className="product-introduce">
            <div className="infor-bar-controller">
                <div className={contentRender==='intro'?"infor-bar-title-active":"infor-bar-title"} onClick={()=>setContentRender('intro')}>
                    <p>

                        GIỚI THIỆU SẢN PHẨM
                    </p>
                </div>
                <div className={contentRender==='notice'?"infor-bar-title-active":"infor-bar-title"} onClick={()=>setContentRender("notice")}>
                    <p>

                        LƯU Ý KHI ĐẶT HÀNG
                    </p>
                </div>
                {/* <div className="infor-bar-title">Thông tin sản phẩm</div> */}
                {/* <div className="infor-bar-title">Thông tin sản phẩm</div> */}
            </div>
            <div className="infor-tab-content">

                {
                    contentRender === "intro" && 
                        <>
                        
                            <div className="product-introduce-title">
                                <hr/>
                                <p>Card giấy C300</p>
                                <hr/>
                            </div>

                            <div className="description">
                                <DescriptionRender description_data={productInfor.description} numberic={false}/>
                            </div>

                            <div className="options-description">
                                <div className="material-des">
                                    <div className="material-des-title">
                                        <p>

                                            Chất liệu:
                                        </p>
                                    </div>
                                    {productInfor.option_des.material_des.map(material=>{
                                        return(
                                            <DescriptionRender description_data={material} numberic={false}/>
                                        )
                                    })}
                                    
                                </div>
                                <div className="effect-des">
                                    <div className="effect-des-title">
                                        <p>

                                            Hiệu ứng:
                                        </p>
                                    </div>
                                    {productInfor.option_des.effect_des.map(effect=>{
                                        return(
                                            <DescriptionRender description_data={effect} numberic={false}/>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                        </>
                }

                {
                    contentRender === "notice" && 
                        <>

                            <div className="notify">
                                
                                {productInfor.order_notify.map((notify,index)=>{
                                    return(

                                        <DescriptionRender description_data={notify} numberic={index} />
                                    )
                                })}
                            </div>

                        </>
                }
            
            </div>    
            
        </div>
    )
}