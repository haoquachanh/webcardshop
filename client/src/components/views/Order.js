import React,{ useState } from "react";
import '../styles/order.scss';
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'
import Popup from 'reactjs-popup'

/**import icons */

import {IoIosArrowUp} from "react-icons/io"
const ORDER_INFOR=[
    {
        orderCode: "51644879",
        orderInfor:[

            {
                nameProduct: "Card bo góc",
                material: "Card Giấy C300",
                effect: "Kim tuyến",
                size: "60x90cm",
                status: "Đang in",
                paymentMethod: "qua Momo",
                dateOfPayment: "23/06/2016",
                quantity: 18 ,
                orderCost: 179000 ,
                discount: 25000 ,
                diliveryCost: 50000 ,
                totalCost: 204000 ,
                cardList:[
                    {
                        img:"https://via.placeholder.com/200x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/150x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    }
                ]
            },
            {                
                nameProduct: "Card bo góc",
                material: "Card Polar",
                effect: "Hologram",
                size: "30x40cm",
                status: "Đang xử lý",
                paymentMethod: "qua Momo",
                dateOfPayment: "24/03/2016",
                quantity: 15 ,
                orderCost: 173000 ,
                discount: 4000 ,
                diliveryCost: 0 ,
                totalCost: 169000 ,
                cardList:[
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    }
                ]
            },
            {
                nameProduct: "Sổ Tay",
                material: "nan",
                effect: "nan",
                size: "60x90cm",
                status: "Hoàn thành",
                paymentMethod: "qua eBanking",
                dateOfPayment: "19/03/2016",
                quantity: 70 ,
                orderCost: 112000 ,
                discount: 2000 ,
                diliveryCost: 0 ,
                totalCost: 110000 ,
                cardList:[
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    },
                    {
                        img:"https://via.placeholder.com/100x150",
                        quantity:1
                    }
                ]
            }

        ]
    }   
]

const DEFAULT_PAYMENT_METHOD=[
    {
        name: "Momo",
        detail: "Quý khách vui lòng chuyển vào tài  khoản 0987654321 - Nguyễn Minh Hiên - Lời nhấn: “Mã đơn hàng”"
    },
    {
        name: "e-Banking",
        detail: [
            "Ngân hàng Phương Đông (OCB)",
            "Số  tài  khoản: 0987 6543 2112",
            "Lời nhắn: “Mã đơn hàng”"
        ]
    }

]

const DEFAULT_STATUS={
    orderConfirm: true,
    paid:true,
    printed: true,
    delivering:false,
    completed: false
}

//cần 1 obj
function Order(){
    const [defaultOrderInfor,setDefaultOrderInfor]=useState(ORDER_INFOR)

    const [viewUserNote,toggleViewUserNote] = useState(false)

    const handleToggleUserNote=()=>{
        toggleViewUserNote(!viewUserNote)
    }

    const [viewMoreDetailFlag,setToggleViewMoreDetailFlag]= useState(
        Array(defaultOrderInfor[0].orderInfor.length).fill(false)
    )

    const handleToggleViewMoreDetailFlag=(index)=>{
        const updatedIsShown = [...viewMoreDetailFlag];
        updatedIsShown[index] = !updatedIsShown[index];
        setToggleViewMoreDetailFlag(updatedIsShown);
    }
    
    const handleDeleteOrder=(index)=>{

        const updatedIsShown = [...viewMoreDetailFlag];
        updatedIsShown.splice(index,1);
        setToggleViewMoreDetailFlag(updatedIsShown);

        const tempOrderInforList = [...defaultOrderInfor];
        tempOrderInforList[0].orderInfor.splice(index,1);
        setDefaultOrderInfor(tempOrderInforList);
    }
    
    const deletePopup=(index)=>{

        return (
            <Popup className="check-confirm-delete-box" trigger={
                <button 
                    className="cancle-order-btn"
                    disabled={defaultOrderInfor[0].orderInfor.length<=1}
                >Hủy đơn này</button>
            } modal nested>
                {
                    close=>(
                        <div className="are-you-sure">
                            <div className="delete-question">
                                Bạn có chắc muốn xóa đơn này không?
                            </div>
                            <div className="answer-btns">
                                
                                <button 
                                    className="accept-delete-btn" 
                                    onClick={()=>{
                                    close()
                                    handleDeleteOrder(index)
                                    
                                }}>
                                        Xác nhận
                                </button>
                                <button className="cancle-delete-btn" onClick={()=>close()}>Hủy</button>
                            </div>
                        </div>
                    )
                }

            </Popup>

        )
    }

    return(
        <>
            <div className="main-order">
                <div className="statusbar">
                    <div className="text">
                        <div className={DEFAULT_STATUS.orderConfirm?"point-active":"point"}>Nhận đơn</div>
                        <div className={DEFAULT_STATUS.paid?"point-active":"point"}>Đã thanh toán</div>
                        <div className={DEFAULT_STATUS.printed?"point-active":"point"}>Đã in xong</div>
                        <div className={DEFAULT_STATUS.delivering?"point-active":"point"}>Đang giao</div>
                        <div className={DEFAULT_STATUS.completed?"point-active":"point"}>Hoàn thành</div>
                    </div>
                    <div className="pointline">
                        <hr></hr>
                        <div className="point">
                            <RiCheckboxBlankCircleFill 
                                className={DEFAULT_STATUS.orderConfirm?"iconOrder-active":"iconOrder"}
                                />
                        </div>
                        <div className="point">
                            <RiCheckboxBlankCircleFill 
                                className={DEFAULT_STATUS.paid?"iconOrder-active":"iconOrder"}
                                />
                            </div>
                        <div className="point">
                            <RiCheckboxBlankCircleFill 
                                className={DEFAULT_STATUS.printed?"iconOrder-active":"iconOrder"}
                                />
                            </div>
                        <div className="point">
                            <RiCheckboxBlankCircleFill 
                                className={DEFAULT_STATUS.delivering?"iconOrder-active":"iconOrder"}
                                />
                            </div>
                        <div className="point">
                            <RiCheckboxBlankCircleFill 
                                className={DEFAULT_STATUS.completed?"iconOrder-active":"iconOrder"}
                               />
                            </div>
                    </div>
                </div>
                <div className="content-order">
                    <div className="order-infor">
                        <div className="infor-top-bar">

                            <div className="order-code">
                                <p id="key">Mã đơn hàng: </p>
                                <p id="value"> {defaultOrderInfor[0].orderCode}</p>
                                
                            </div>
                            <div className="order-date">
                                <p id="key">Ngày đặt hàng:</p>
                                <p id="value"> dd/mm/yyyy </p>
                            </div>
                            <div className="estimated-delivery-date">
                                
                                <p id="key">Ngày giao hàng:</p>
                                <p id="value"> dd/mm/yyyy </p>
                            </div>

                        </div>

                    <div className="product-list">
                        {
                            defaultOrderInfor[0].orderInfor.map((product,index)=>{
                                return(

                                    <div className="product-infor-box">
                                        <div className="product-infor">
                                            <div className="name-material-size">
                                                <p className="name">{product.nameProduct}</p>
                                                <div className="material-size">
                                                    {
                                                        product.material!=="nan"&&
                                                        <p className="material">{product.material} </p>
                                                    }

                                                    {
                                                        product.effect!=="nan"&&
                                                        <p className="effect">{product.effect}</p>
                                                    }
                                                    <p className="size">
                                                        {product.size}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="quantity-cost">
                                                <div className="quantity">
                                                    <p className="quantity-img">
                                                        <p className="title">Số lượng ảnh:</p>
                                                        <p className="value">{product.cardList.length}</p>
                                                    </p>
                                                    <p className="quantity-card">
                                                        <p className="title">Số lượng card:</p>
                                                        <p className="value">{product.quantity}</p>
                                                    </p>
                                                </div>
                                                <p className="cost">
                                                    <p className="title">Số tiền:</p>
                                                    <p className="value">{product.orderCost} đ</p>
                                                     
                                                </p>
                                            </div>
                                            {/* <div className="operation">
                                                {deletePopup(index)}
                                            </div> */}
                                        </div>

                                        <button className="view-more-btn" onClick={()=>handleToggleViewMoreDetailFlag(index)}>
                                            Xem chi tiết 
                                            <IoIosArrowUp style={viewMoreDetailFlag[index]===true?{transform: "rotate(180deg)",transition:"transform 0.25s ease"}:{transition:"transform 0.25s ease"}}/>
                                        </button>
                                        <div className="card-list-container">
                                        
                                            <div className="card-list">
                                                {viewMoreDetailFlag[index]&&
                                                
                                                product.cardList.map(card=>{
                                                    return(
                                                        
                                                        <div className="card-box">
                                                            <img src={card.img} alt={card.img}>

                                                            </img>
                                                            <div className="card-quantity">
                                                                Số lượng: {card.quantity}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    </div>
                    <div className="summary-bar">
                        <div className="order-date-infor">
                            <div className="payment-method">
                                <p id="key">Phương thức thanh toán:</p>
                                <p id="value"> Momo </p>
                            </div>
                            <div className="order-status">
                                
                                <p id="key">Tình trạng đơn hàng:</p>
                                <p id="value"> Đang in </p>
                            </div>
                            <div className="user-note">
                                Ghi chú thêm:
                                <div className="view-detail" onClick={handleToggleUserNote}>
                                    Xem chi tiết
                                </div>
                                
                                <div  className="display-user-note" style={viewUserNote?{opacity:1,transition:"all 0.55s ease"}:{pointerEvents:"none"}}>
                                    Mời nắng, qua đây, mang niềm vui, tình cờ anh như lạc lối, như quên một điều xuyến xao là bên em.
                                    Những bài hát bỏ rơi, bên thềm lá rụng ngây thơ rét căm theo ngày mưa.

                                    Tìm ai đây, tiếng em cứ xa mờ đi, trái tim nghẹn ngào đắm đuối, lạc đâu ánh mắt xưa
                                    Còn nhớ, đôi tay ngày nào, gió ơi gió xin đuèng mang em đi, đưa em đi xa mãi, chỉ còn mình anh

                                    Mời nắng, qua đây, mang tình yêu, sợ lòng anh quên lời hát, viết riêng em ngồi nhớ nhung, và cô đơn.
                                    Những lời nói, đùa vui xuyến xao, anh lạc trong mơ thiết tha, ùa về.

                                    Tìm ai đây, tiếng em cứ xa mờ đi, trái tim nghẹn ngào đắm đuối, lạc đâu ánh mắt xưa
                                    Còn nhớ, đôi tay ngày nào, gió ơi gió xin đuèng mang em đi, đưa em đi xa mãi, chỉ còn mình anh

                                    Anh nhớ, lần đầu, nhìn em, bầu trời như lên cao vợi, thì ra em là của anh.
                                </div>
                            </div>

                        </div>
                        <div className="cost-infor">
                            <div className="order-cost">
                                <p id="key">Tổng đơn hàng:</p>
                                <div id="value">{900000} đ</div>
                            </div>
                            <div className="delivery-cost">
                                <p id="key">Phí giao hàng:</p>
                                <div id="value">{900000} đ</div>
                            </div>
                            <div className="discount">
                                <p id="key">Giảm giá:</p>
                                <div id="value"> - {900000} đ</div>
                            </div>
                            <div className="total-cost">
                                <p id="key">Thàng tiền:</p>
                                <div id="value">{900000} đ</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="payment-instruction">
                    <div className="instruction-content">
                        <p className="title">Hướng dẫn thanh toán:</p>
                        <ul className="list-method">
                            {DEFAULT_PAYMENT_METHOD.map(method => (
                            <li className="method-item">
                                Thanh toán bằng {method.name}:
                                {Array.isArray(method.detail) ? (
                                method.detail.map(detail => <p>{detail}</p>)
                                ) : (
                                <p>{method.detail}</p>
                                )}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;