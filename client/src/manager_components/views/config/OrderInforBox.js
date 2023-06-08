import React,{useState} from "react";
import OrderedProductDetail from "../../../components/components-render/OrderedProductDetail";

import './config_styles/orderInforBox.scss'

export default function OrderInfoBox({orderInfor}){

    const [toggle, setToggle]=useState(false)
    const [acceptOrder,setAcceptOrder]=useState(false)
    const [confirmPayment,setConfirmPayment]=useState(false)


    return(
        <div className="order-infor-box">
            <div className="basic-infor infor">
                <div className="order-code infor">
                    <p className="key">Mã đơn hàng:</p>
                    <p className="value">{orderInfor.orderCode}</p>
                </div>
                <div className="order-date infor">
                    <p className="key">Ngày đặt hàng:</p>
                    <p className="value">{orderInfor.createdAt}</p>
                </div>
                {/* <div className="orderInfor-cost infor">
                    <p className="key">Tổng tiền:</p>
                    <p className="value">{orderInfor.orderInforTotal}</p>
                </div> */}
                <div className="order-status infor">
                    <p className="key">Tình trạng:</p>
                    <p className="value">{orderInfor.status}</p>
                </div>
                <div className="order-status infor">
                    <p className="key">Nguời nhận:</p>
                    <p className="value">{orderInfor.nameReceive}</p>
                </div>
                <div className="order-status infor">
                    <p className="key">Địa chỉ:</p>
                    <p className="value">{orderInfor.address}</p>
                </div>
                <div className="order-status infor">
                    <p className="key">Số điện thoại:</p>
                    <p className="value">{orderInfor.phone}</p>
                </div>
            </div>
            <div className="vertify">
                <button className={acceptOrder?"active-btn":"accept-order-btn"} onClick={()=>setAcceptOrder(true)}>
                    Xác nhận đơn hàng
                </button>
                <button className={confirmPayment?"active-btn":"confirm-payment-btn"} onClick={()=>setConfirmPayment(true)}>
                    Xác nhận thanh toán
                </button>
            </div>
            <div className="order-detail">
                <button className="show-products-btn" onClick={()=>setToggle(!toggle)}>
                    Đơn hàng bao gồm
                </button>
                {
                    toggle&&
                    <div className="product-list">
                        {orderInfor.productList.map(product=>{
                            return(
                                <OrderedProductDetail product_infor={product}/>
                            )
                        })}
                    </div>    
                }
            </div>
        </div>
    )
}