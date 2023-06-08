import React from "react";

export default function OrderInfor({contactInfor}){
    return (
        <div className="order-infor">
            <div className="order-infor-title">
                <p>Tư vấn và đặt hàng</p>
            </div>

            <div className="order-infor-content">
                {contactInfor.map(infor=>{
                    return (

                        <div className="order-infor-item">
                            <div className="avt-counsulter">
                                <img src={infor.avt} alt='avatar'/>

                            </div>
                            <div className="contact-infor">
                                <div className="contact-infor-item">
                                    <p className="title">Họ tên:</p>
                                    <p className="value">{infor.name}</p>
                                </div>
                                
                                <div className="contact-infor-item">
                                    <p className="title">Số điện thoại:</p>
                                    <p className="value">{infor.phone}</p>
                                </div>
                                <div className="contact-infor-item">
                                    <p className="title">Email:</p>
                                    <p className="value">{infor.email}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}