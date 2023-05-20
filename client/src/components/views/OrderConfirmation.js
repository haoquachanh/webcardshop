import React, { useState, useEffect} from "react";
import '../styles/config/content.scss'
import '../styles/orderConfirmation.scss';
import Popup from 'reactjs-popup'
import * as actions from '../../store/actions'
import { useDispatch } from "react-redux";

/**import icons */

import {IoIosArrowUp} from "react-icons/io"
import { Link } from "react-router-dom";



/**Fake data for testing */
const ADDRESS_LIST=[
    {
        id:101,
        name: "Quách Anh Hào 1",
        phone: "0123026681",
        address: "263 Đường Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh"
    },
    {
        id:102,
        name: "Quách Anh Hào",
        phone: "0121976289 2",
        address: "264 Đường Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh "
    },
    {
        id:104,
        name: "Quách Anh Hào 3",
        phone: "0121237891",
        address: "267 Đường Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh "
    },
    {
        id:105,
        name: "Quách Anh Hào 3",
        phone: "0110826789",
        address: "268 Đường Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh "
    }
]

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

function OrderConfirmation({orderData}){

    //Post order information
    const dispatch=useDispatch()

    const handleSubmitOrder =async()=>{
        dispatch(actions.set_order(orderData))
    }

    //Get Address list
    const [addressList,setAddr]= useState(ADDRESS_LIST.length!==0?ADDRESS_LIST:[])
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/client/orderConfirmation/AddressList?user_id=')
        .then(response => response.json())
        .then(data => setAddr(data))
        .catch(error => console.error(error));
    }, []);


    const [defaultOrderInfor,setDefaultOrderInfor]=useState(ORDER_INFOR)


    const [defaultAddrInfor,setDefaultAddrInfor]= useState(addressList.length!==0? addressList[0]:[])
    const [dropdownDeliveryListFlag, setToggleDropdownList]= useState(false)
    const [viewUserNote,toggleViewUserNote] = useState(false)
    const [paymentMethod, setPaymentMethod] =useState("")

    const [formData, setFormData] = useState({
        id:100,
        name: '',
        phone: '',
        address: '',
    });

    const handleSetDefaultAddrInfor=(index)=>{
        setDefaultAddrInfor(addressList[index])
    }

    const handleSetPaymentMethod=(methodName)=>{
        setPaymentMethod(methodName)
    }

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
    
    const handleToggleDeliveryList=()=>{
        setToggleDropdownList(!dropdownDeliveryListFlag)
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
                >Hủy</button>
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

    const deleteOrdersPopup=()=>{

        return (
            <Popup className="check-confirm-delete-box" trigger={
                <button 
                    className="cancle-orders-btn"
                >Hủy đơn</button>
            } modal nested>
                {
                    close=>(
                        <div className="are-you-sure">
                            <div className="delete-question">
                                Bạn có chắc muốn huỷ đơn không? Nếu có, chúng tôi sẽ chuyển bạn về trang chủ.
                            </div>
                            <div className="answer-btns">
                                
                                <Link 
                                    to="../home"
                                    className="accept-delete-link" 
                                    onClick={()=>{
                                    close()
                                                                        
                                }}>
                                        Xác nhận
                                </Link>
                                <button className="cancle-delete-btn" onClick={()=>close()}>Hủy</button>
                            </div>
                        </div>
                    )
                }

            </Popup>

        )
    }

    const handleAddNewAddr=()=>{
        if(formData.name!=="" && formData.phone!=="" && formData.address!==""){
            setAddr([...addressList,...[formData]])
            setDefaultAddrInfor(formData)
        }

    }

    console.log(addressList.length)
    const renderDeliveryInfor=()=>{

        if(addressList.length<=0){
            
            return (
                <div className = "delivery-infor-box">
                    
                    <div className="get-input-addr-infor">
                        <p className="opening">
                            Dường như bạn chưa có thông tin địa chỉ giao hàng. Hãy thêm một cái mới nhé!
                        </p>
                        <div className="input-box">
                            <label htmlFor="name-input">Họ và Tên:</label>
                            <input
                            type="text"
                            className="name-input"
                            name="name-input"
                            placeholder="..."
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, id:Math.floor(Math.random()*999)+100,name: e.target.value })
                            }
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="phone-input">Số điện thoại:</label>
                            <input
                            type="text"
                            className="phone-input"
                            name="phone-input"
                            placeholder="..."
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="addr-input">Địa chỉ:</label>
                            <input
                            type="text"
                            className="addr-input"
                            name="addr-input"
                            placeholder="..."
                            value={formData.address}
                            onChange={(e) =>
                                setFormData({ ...formData, address: e.target.value })
                            }
                            />
                        </div>
                        <button 
                            className="add-addr-btn"
                            onClick={()=>{
                                handleAddNewAddr();
                                // handleSetDefaultAddrInfor(0)
                            }}
                            disabled={formData.name===""|| formData.phone===""|| formData.address===""?true:false}      
                        >Thêm địa chỉ này</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className = "delivery-infor-box">
                    <div className="infor-title-columns">
                        <div className="reciever-name">
                            <p>
                                Tên người nhận
                            </p>
                        </div>
                        <div className="reciever-phone">
                            <p>
                                Số điện thoại
                            </p>
                        </div>
                        <div className="reciever-addr">
                            <p>
                                Địa chỉ
                            </p>
                        </div>
                    </div>
                    <div className="selected-delivery-infor">
                        <div className="name">
                            <p>{defaultAddrInfor.name}</p>
                        </div>
                        <div className="phone">
                            <p>{defaultAddrInfor.phone}</p>
                        </div>
                        <div className="address">
                            <p>{defaultAddrInfor.address}</p>
                        </div>
                    </div>

                    <div className="addr-options-dropdown-menu">

                        <button className="change-deliver-infor-btn" onClick={handleToggleDeliveryList}>
                            Thay đổi
                            <IoIosArrowUp style={dropdownDeliveryListFlag===true?{transform: "rotate(180deg)",transition:"transform 0.25s ease"}:{transition:"transform 0.25s ease"}}/>
                        </button>

                        <div className="delivery-infor-options">
                            {dropdownDeliveryListFlag&&
                                addressList.filter(address=>address.id!==defaultAddrInfor.id).map((address,index)=>{
                                return(

                                    <div 
                                        className="option" 
                                        style={index%2===0?{backgroundColor:"#D9D9D9"}:{}}
                                        onClick={()=>handleSetDefaultAddrInfor(index)}
                                    >
                                        <div className="name">
                                            <p>{address.name}</p>
                                        </div>
                                        <div className="phone">
                                            <p>{address.phone}</p>
                                        </div>
                                        <div className="address">
                                            <p>{address.address}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            )
        }
    }

    return (
        <div className="content">
            <div className="delivery-infor">
                <div className="delivery-infor-title">
                    Thông tin giao hàng:
                </div>

                {renderDeliveryInfor()}

            </div>
            <div className="order-infor">
                <div className="order-infor-title">
                    Thông tin các sản phẩm đã đặt:
                </div>

                <div className="order-code">
                    Mã đơn hàng: {defaultOrderInfor[0].orderCode}
                </div>

                <div className="product-list">
                    {
                        defaultOrderInfor[0].orderInfor.map((product,index)=>{
                            return(

                                <div className="product-infor-box">
                                    <div className="product-infor">
                                        <div className="name-material-size">
                                            <div className="name-material">
                                                <p className="name">{product.nameProduct}</p>
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
                                        <div className="quantity">
                                            <div className="quantity-img">
                                                <p className="title">Số lượng ảnh:</p>
                                                <p className="value">{product.cardList.length}</p>
                                            </div>
                                            <div className="quantity-card">
                                                <p className="title">Số lượng card:</p>
                                                <p className="value">{product.quantity}</p>
                                            </div>
                                            <div className="cost">
                                                <p className="title">Số tiền:</p>
                                                <p className="value">{product.orderCost} đ</p>
                                                 
                                            </div>
                                        </div>
                                        <div className="operation">
                                            {deletePopup(index)}
                                        </div>
                                    </div>

                                    <button className="view-more-btn" onClick={()=>handleToggleViewMoreDetailFlag(index)}>
                                        Xem chi tiết 
                                        <IoIosArrowUp style={viewMoreDetailFlag[index]===true?{transform: "rotate(180deg)",transition:"transform 0.25s ease"}:{transition:"transform 0.25s ease"}}/>
                                    </button>

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
                            )
                        })
                    }
                </div>

            </div>
            <div className="summary-bar">
                <div className="order-date-infor">
                    <div className="order-date">
                        <p id="key">Ngày đặt hàng:</p>
                        <p id="value"> dd/mm/yyyy </p>
                    </div>
                    <div className="estimated-delivery-date">
                        
                        <p id="key">Ngày giao hàng dự kiến:</p>
                        <p id="value"> dd/mm/yyyy </p>
                    </div>
                    <div className="user-note">
                        Ghi chú thêm:
                        <div 
                            className="view-detail" 
                            onClick={handleToggleUserNote}>
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
            <div className="bottom-btn">

                <div className="payment-method-options">
                    <div 
                        className="payment-method" 
                        onClick={()=>handleSetPaymentMethod("momo")}
                        style={paymentMethod==="momo"?{backgroundColor:"#58445e",color:"white",transition: "all 0.55s ease"}:{}}
                    >

                        <input type="radio" id="momo" name="method"/>
                        <label htmlFor="momo">Thanh toán qua Momo</label>
                    </div>

                    <div 
                        className="payment-method"
                        onClick={()=>handleSetPaymentMethod("eBanking")}    
                        style={paymentMethod==="eBanking"?{backgroundColor:"#58445e",color:"white",transition: "all 0.55s ease"}:{}}
                    >

                        <input type="radio" id="eBanking" name="method"/>
                        <label htmlFor="eBanking">Chuyển khoản ngân hàng</label>
                    </div>
                        
                </div>
                <div className="btns">
                    
                    {deleteOrdersPopup()}
                    <Link 
                        to="../orders" 
                        className="confirm-btn" 
                        onClick={()=>handleSubmitOrder()}
                        style={paymentMethod===""||addressList.length<=0?{pointerEvents:"none",backgroundColor:"lightgrey"}:{}}>
                        XÁC NHẬN
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default OrderConfirmation