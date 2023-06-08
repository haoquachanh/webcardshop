import React, { useState,useEffect } from "react";
import OrderedProductDetail from "../components-render/OrderedProductDetail";
import '../styles/order.scss'
import DescriptionRender from "../components-render/DescriptionReder";


const ORDER_INFOR={
    
    orderCode: 123455678,
    orderDate: "2020-01-01",
    orderStatus: "Pending",
    orderTotal: 10000,
    order_list:[
        {
            name:"Sticker",
            material:"Bế Demi (Kisscut)",
            effect:"Bóng",
            size:"Tờ A3",
            quantity:"12",
            isDesigned:"Đã có",
            img_src:"https://www.youtube.com/watch?v=3T3ofoKfEoY",
        },
        {
            name:"Sticker",
            material:"Bế Demi (Kisscut)",
            effect:"Bóng",
            size:"Tờ A3",
            quantity:"12",
            isDesigned:"Đã có",
            img_src:"https://www.youtube.com/watch?v=3T3ofoKfEoY",
        }
    ]
    
}

const payment_method=[
    {   
        title:"Thanh toán qua MoMo",
        content:"Tài khoản: 096 533 7436. /br/Lời nhắn: <Mã đơn hàng>",
        img:"",
    },
    {   
        title:"Chuyển khoản qua ngân hàng",
        content:"Tài khoản: 096 533 7436. /br/Lời nhắn: <Mã đơn hàng>",
        img:"",
    },
]

function Order(){

    const [orders, setOrders]= useState()
    const currentURL = window.location.href;
    const user_id = currentURL.match(/userId=(\d+)/)[1];
    useEffect(() => {
        fetch(`http://localhost:3001/api/v1/order/all?userId=${user_id}`)
          .then(response => response.json())
          .then(data => setOrders(data.orderLists))
          .catch(error => console.error(error));
    }, []);

    // console.log(orders);

    return(
        <div className="main">

            <div className="order-container">
                {
                    orders===undefined?"Bạn chưa có đơn hàng nào hết!":
                    orders?.map(order=>{
                        return(
                            <>
                            
                                <div className="order-overview">

                                    <div className="order-code infor">
                                        <p className="key">Mã đơn hàng:</p>
                                        <p className="value">{order.orderCode}</p>
                                    </div>
                                    <div className="order-date infor">
                                        <p className="key">Ngày đặt hàng:</p>
                                        <p className="value">{order.createdAt}</p>
                                    </div>
                                    {/* <div className="order-cost infor">
                                        <p className="key">Tổng tiền:</p>
                                        <p className="value">{order.orderTotal}</p>
                                    </div> */}
                                    <div className="order-status infor">
                                        <p className="key">Tình trạng:</p>
                                        <p className="value">{order.status}</p>
                                    </div>
                                    <div className="order-status infor">
                                        <p className="key">Nguời nhận:</p>
                                        <p className="value">{order.nameReceive}</p>
                                    </div>
                                    <div className="order-status infor">
                                        <p className="key">Địa chỉ:</p>
                                        <p className="value">{order.address}</p>
                                    </div>
                                    <div className="order-status infor">
                                        <p className="key">Số điện thoại:</p>
                                        <p className="value">{order.phone}</p>
                                    </div>
                                </div>

                                <div className="order-list">
                                    <div className="title">
                                        <p>
                                            Đơn hàng bao gồm:
                                        </p>
                                    </div>
                                    {
                                        order.productList.map((item,index)=>{
                                            return(
                                                <OrderedProductDetail product_infor={item}/>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </>
                        )
                    })
                }


                <div className="payment-instructor">
                    <div className="title">
                        <p>
                            Hướng dẫn thanh toán:
                        </p>
                    </div>
                    <div className="payment-instructor-container">

                        {payment_method.map(item=>{
                            return(
                                <DescriptionRender description_data={item} numberic={false}/>
                            )
                        })}
                    </div>
                    <div className="note">
                        <p>
                            <i><b>Lưu ý:</b></i> 
                        </p>
                        <p>
                            - Vui lòng kiểm tra thông tin của bạn trước khi thanh toán.
                        </p>
                        <p>
                            - Sau khi thanh toán thành công, bạn vui lòng chụp lại màn hình và gửi qua Zalo: 
                        </p>
                        <p>
                            -- Minh Hiên - 0937617695
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}export default Order