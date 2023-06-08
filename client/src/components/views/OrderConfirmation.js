import React, { useState } from "react";
import GetUserInput from "../components-render/GetUserInput";
import OrderedProductDetail from "../components-render/OrderedProductDetail";
import { Link } from "react-router-dom";

import '../styles/orderConfirmation.scss';

// const order_list=[
//     {
//         name:"Sticker",
//         material:"Bế Demi (Kisscut)",
//         effect:"Bóng",
//         size:"Tờ A3",
//         quantity:"12",
//         isDesigned:"Đã có",
//         img_src:"https://www.youtube.com/watch?v=3T3ofoKfEoY",
//     },
//     {
//         name:"Sticker",
//         material:"Bế Demi (Kisscut)",
//         effect:"Bóng",
//         size:"Tờ A3",
//         quantity:"12",
//         isDesigned:"Đã có",
//         img_src:"https://www.youtube.com/watch?v=3T3ofoKfEoY",
//     }
// ]


const order_infor_req={
    nameReceive:{
        label:"Họ và tên:",
        required: true,
        type:'text',
        value:'',
        description:[],
    },
    address:{
        label:"Địa chỉ:",
        required: true,
        type:'text',
        value:'',
        description:[],
    },
    phone:{
        label:"Số điện thoại",
        required: true,
        type:'tel',
        value:'',
        description:[],
    },
    email:{
        label:"Email",
        required: true,
        type:'email',
        value:'',
        description:[],
    },

}

function OrderConfirmation(){
    let fields =Object.entries(order_infor_req)
    // console.log(fields)

    const mainKeys = Object.keys(order_infor_req);
    const obj = mainKeys.reduce((accumulator, value) => {
        return {...accumulator, [value]: ''};
      }, {});
    const [userInfor,setUserinfor]=useState(obj)
    // console.log(userInfor);

    // console.log(userInfor.isDesigned);
    const data = JSON.parse(localStorage.getItem("persist:auth"));
    const token = JSON.parse(data.token);
    
    const decodedToken = token===null?{userId:null}:JSON.parse(atob(token?.split('.')[1]));
    // console.log(decodedToken);

    const order_list = JSON.parse(localStorage.getItem("order"));
    // const token = JSON.parse(data.token);
    // console.log(order_data)


    function createOrder(userId, orderList,userInfo) {
        // console.log(userId);
        const apiUrl = `http://localhost:3001/api/v1/order/create?userId=${userId}`;
        const final_post_order={
            orderId:"",
            userId:`${userId}`,
            nameRecieve:`${userInfo.nameReceive}`,
            address:userInfo.address,
            phone:userInfo.phone,
            productList:orderList,
        }
        console.log(final_post_order);

        fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(final_post_order),
        })
            .then(response => response.json())
            .then(data => {
            // console.log('Order created:', data);
            // Handle the response data as needed
        
            // Redirect to the new URL
            const redirectUrl = `http://localhost:3000/orders?userId=${userId}`;
            // window.location.href = redirectUrl;
            })
            .catch(error => {
            console.error('Error creating order:', error);
            // Handle any errors that occurred during the request
            });
 
      }
      
      

    return (
        <div className="main">

            <div className="order-confirmation">

                <div className="title-container">
                    <div className="main-title">
                        <p className="title">
                            XÁC NHẬN ĐƠN HÀNG
                        </p>
                        <p className="sub-title">
                            Thông tin cần thiết để đặt hàng tại LENTI-LAB
                        </p>
                        
                    </div>
                </div>

                <div className="order-list">
                    <div className="order-list-title">
                        <p className="title">
                            Thông tin đơn hàng:
                        </p>
                        <p className="sub-title">
                            Bạn đã đặt {order_list.length} sản phẩm trong đơn hàng này
                        </p>
                    </div>
                    <div className="order-list-container">

                        {
                            order_list.map(product=>{
                                return(

                                    <OrderedProductDetail product_infor={product}/>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="get-input-container">
                    <div className="user-infor-title">
                        <p className="title">
                            Thông tin khách hàng:
                        </p>
                        <p className="sub-title">
                            Vui lòng điền đầy đủ thông tin bên dưới đây
                        </p>
                    </div>
                    {fields.map(item=>{
                        return (
                                <GetUserInput 
                                    infor_req={item}
                                    user_infor={userInfor}
                                    set_user_infor={setUserinfor}
                                />
                        )
                    })}
                </div>
                <div className="contact-infor">
                    <p className="title">
                        Nếu có thắc mắc xin liên hệ:
                    </p>
                    <p className="sub-title">
                        Minh Hiên - 0937617695 (Zalo) - 3dlenticularvn@gmail.com 
                    </p>
                </div>    
                <div className="btns">
                    <button className="cancle">
                        <Link to="/">

                            Trở lại
                        </Link>
                        
                    </button>
 
                    <button className="order" onClick={()=>createOrder(decodedToken?.userId,order_list,userInfor)}>
                            Đặt in luôn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation