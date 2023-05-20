import React, { useState,useEffect } from "react";
import '../styles/config/content.scss'
import '../styles/account.scss'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom';

import * as actions from '../../store/actions'
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux";

//import icon
import { RiEdit2Fill } from 'react-icons/ri'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillPlusCircle, AiFillMessage, AiFillPrinter, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { FaShippingFast } from "react-icons/fa"
import { TbShoppingCartDiscount } from "react-icons/tb"
import { BiLoaderCircle } from "react-icons/bi"
import { MdNotificationsActive } from "react-icons/md"
import { IoListCircle } from "react-icons/io5"


function Account() {

    //Get account infor
    const [accountInfor,setAccountInfor]=useState(null)
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const url = `http://localhost:3001/api/v1/client/account?id=${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setAccountInfor(data))
            .catch(error => console.error(error));
    }, []);

    const [isOpen, setIsOpen] = useState(true);
    const toggleDropdown = (check) => {
        if (check === "oppen") {
            if (isOpen === false) {

                setIsOpen(true);
            }
        } else {
            if (isOpen === true) {

                setIsOpen(false);
            }
        }
    };

    const [isEditable1, setIsEditable1] = useState(false)
    const [isEditable2, setIsEditable2] = useState(false)
    const [isEditable3, setIsEditable3] = useState(false)
    const [isEditable4, setIsEditable4] = useState(false)
    
    const [sideMenuFlag,toggleSideMenu] =useState(false)

    const [contentType, setContentType] = useState("myProfile")

    const ACOUNT_SECTIONS = {
        myProfile: ["Hồ sơ của tôi", "Quản lý hồ sơ của bạn"],
        deliveryAddress: ["Địa chỉ giao hàng", "Quản lý danh sách các địa chỉ giao hàng"],
        password: ["Mật khẩu", "Thay đổi mật khẩu của bạn"],
        orderHistory: ["Lịch sử mua hàng", "Ghi lại lịch sử mua hàng của bạn"],
        yourCart: ["Giỏ hàng của bạn", "Lưu lại tất cả sản phẩm bạn muốn mua sau này"],
        yourNotice: ["Thông báo của bạn", "Nơi lưu những điều chúng tôi muốn thông báo cho bạn"]
    }

    const handleSetSection = (section) => {
        setContentType(section);
    }

    const {currentData}= useSelector(state=>state.user)

    const user = {
        username: 'haodetu',
        name: 'Quách Anh Hào',
        address: 'Binh Định',
        phone: '1234579865',
        email: 'anhhaomnmm@gmail.com',
        sex: 'Nam',
        birth: '11/02/2001'
    }

    const [userState, setUserState] = useState(currentData)

    useEffect(() => {
        setUserState(currentData);
      }, [currentData]);
    

    const UpdateData = () => {
        // update user here
    }



    /**
     * 
     * For render content when select section in side-column
     */

    const ADDRESS_LIST = [
        {
            name: "Quách Anh Hào 1",
            phone: "0123026681",
            address: "263 Đường Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh"
        },
        {
            name: "Quách Anh Hào",
            phone: "0121976289 2",
            address: "264 Đường Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh "
        },
        {
            name: "Quách Anh Hào 3",
            phone: "0121237891",
            address: "267 Đường Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh "
        },
        {
            name: "Quách Anh Hào 3",
            phone: "0110826789",
            address: "268 Đường Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh "
        }
    ]

    const ORDER_HISTORY = [
        {
            orderCode: "51644879",
            nameProduct: "Card bo góc",
            material: "Card Giấy C300",
            effect: "Kim tuyến",
            size: "60x90cm",
            status: "Đang in",
            paymentMethod: "qua Momo",
            dateOfPayment: "23/06/2016",
            quantity: 18,
            orderCost: 179000,
            discount: 25000,
            diliveryCost: 50000,
            totalCost: 204000,
        },
        {
            orderCode: "30431176",
            nameProduct: "Card bo góc",
            material: "Card Polar",
            effect: "Hologram",
            size: "30x40cm",
            status: "Đang xử lý",
            paymentMethod: "qua Momo",
            dateOfPayment: "24/03/2016",
            quantity: 15,
            orderCost: 173000,
            discount: 4000,
            diliveryCost: 0,
            totalCost: 169000,
        },
        {
            orderCode: "73879701",
            nameProduct: "Sổ Tay",
            material: "nan",
            effect: "nan",
            size: "60x90cm",
            status: "Hoàn thành",
            paymentMethod: "qua eBanking",
            dateOfPayment: "19/03/2016",
            quantity: 70,
            orderCost: 112000,
            discount: 2000,
            diliveryCost: 0,
            totalCost: 110000,
        },
        {
            orderCode: "73835824",
            nameProduct: "Photostrip giấy C300",
            material: "nan",
            effect: "Mờ",
            size: "30x40cm",
            status: "Đã hủy",
            paymentMethod: "qua Momo",
            dateOfPayment: "15/01/2016",
            quantity: 48,
            orderCost: 193000,
            discount: 6000,
            diliveryCost: 50000,
            totalCost: 237000,
        },
        {
            orderCode: "92290843",
            nameProduct: "Sổ Tay",
            material: "nan",
            effect: "nan",
            size: "60x90cm",
            status: "Đã hủy",
            paymentMethod: "qua Momo",
            dateOfPayment: "01/07/2016",
            quantity: 54,
            orderCost: 168000,
            discount: 5000,
            diliveryCost: 30000,
            totalCost: 193000,
        },
        {
            orderCode: "56578677",
            nameProduct: "Photostrip giấy C300",
            material: "nan",
            effect: "Kim tuyến",
            size: "20x30cm",
            status: "Hoàn thành",
            paymentMethod: "qua Momo",
            dateOfPayment: "22/05/2016",
            quantity: 36,
            orderCost: 107000,
            discount: 2000,
            diliveryCost: 50000,
            totalCost: 155000,
        },
        {
            orderCode: "48859716",
            nameProduct: "Kh.ảnh treo tường",
            material: "nan",
            effect: "nan",
            size: "60x90cm",
            status: "Đang in",
            paymentMethod: "qua Momo",
            dateOfPayment: "23/06/2016",
            quantity: 90,
            orderCost: 183000,
            discount: 17000,
            diliveryCost: 0,
            totalCost: 166000,
        },
        {
            orderCode: "87403191",
            nameProduct: "Lịch Để bàn",
            material: "nan",
            effect: "nan",
            size: "13x18cm",
            status: "Đang xử lý",
            paymentMethod: "qua Momo",
            dateOfPayment: "23/08/2016",
            quantity: 2,
            orderCost: 106000,
            discount: 4000,
            diliveryCost: 30000,
            totalCost: 132000,
        },
        {
            orderCode: "96422120",
            nameProduct: "Sticker",
            material: "Cắt rời",
            effect: "Bóng",
            size: "13x18cm",
            status: "Đang xử lý",
            paymentMethod: "qua Momo",
            dateOfPayment: "05/02/2016",
            quantity: 64,
            orderCost: 129000,
            discount: 1000,
            diliveryCost: 30000,
            totalCost: 158000,
        },
        {
            orderCode: "45700564",
            nameProduct: "Kh.ảnh để bàn",
            material: "nan",
            effect: "nan",
            size: "60x90cm",
            status: "Đang giao",
            paymentMethod: "qua eBanking",
            dateOfPayment: "24/11/2016",
            quantity: 21,
            orderCost: 124000,
            discount: 24000,
            diliveryCost: 30000,
            totalCost: 130000,
        },
        {
            orderCode: "17025134",
            nameProduct: "Sticker",
            material: "Bế Demi",
            effect: "Kim tuyến",
            size: "20x30cm",
            status: "Đang giao",
            paymentMethod: "qua Momo",
            dateOfPayment: "24/11/2016",
            quantity: 9,
            orderCost: 197000,
            discount: 26000,
            diliveryCost: 0,
            totalCost: 171000,
        },
        {
            orderCode: "91211929",
            nameProduct: "Kh.ảnh treo tường",
            material: "nan",
            effect: "nan",
            size: "40x 60cm",
            status: "Đang giao",
            paymentMethod: "qua eBanking",
            dateOfPayment: "21/07/2021",
            quantity: 99,
            orderCost: 190000,
            discount: 15000,
            diliveryCost: 50000,
            totalCost: 225000,
        },
        {
            orderCode: "91211929",
            nameProduct: "Kh.ảnh để bàn",
            material: "nan",
            effect: "nan",
            size: "40x 60cm",
            status: "Đang giao",
            paymentMethod: "qua eBanking",
            dateOfPayment: "21/07/2021",
            quantity: 99,
            orderCost: 190000,
            discount: 15000,
            diliveryCost: 50000,
            totalCost: 225000,
        },
        {
            orderCode: "75891164",
            nameProduct: "Card bo góc",
            material: "Card Lenti",
            effect: "Hologram",
            size: "40x 60cm",
            status: "Đang giao",
            paymentMethod: "qua Momo",
            dateOfPayment: "22/01/2016",
            quantity: 83,
            orderCost: 190000,
            discount: 12000,
            diliveryCost: 30000,
            totalCost: 208000,
        },
        {
            orderCode: "67074092",
            nameProduct: "Post Card",
            material: "Post Card Giấy C300",
            effect: "Mờ",
            size: "60x90cm",
            status: "Đang giao",
            paymentMethod: "qua Momo",
            dateOfPayment: "05/04/2016",
            quantity: 80,
            orderCost: 155000,
            discount: 1000,
            diliveryCost: 0,
            totalCost: 154000,
        },
        {
            orderCode: "76869204",
            nameProduct: "Photobook (Sách Ảnh)",
            material: "Sách ảnh bìa mềm",
            effect: "nan",
            size: "20x30cm",
            status: "Đang giao",
            paymentMethod: "qua Momo",
            dateOfPayment: "30/05/2016",
            quantity: 79,
            orderCost: 199000,
            discount: 30000,
            diliveryCost: 0,
            totalCost: 169000,
        },
        {
            orderCode: "12149167",
            nameProduct: "Poster A3, A2",
            material: "nan",
            effect: "Mờ",
            size: "13x18cm",
            status: "Đang xử lý",
            paymentMethod: "qua eBanking",
            dateOfPayment: "17/01/2016",
            quantity: 21,
            orderCost: 120000,
            discount: 15000,
            diliveryCost: 0,
            totalCost: 105000,
        },
        {
            orderCode: "32158679",
            nameProduct: "Card bo góc",
            material: "Card Cứng 4k",
            effect: "Mờ",
            size: "13x18cm",
            status: "Đang xử lý",
            paymentMethod: "qua Momo",
            dateOfPayment: "22/04/2016",
            quantity: 19,
            orderCost: 135000,
            discount: 26000,
            diliveryCost: 0,
            totalCost: 109000,
        }
    ]

    const USER_NOTICE = [
        {
            icon: "FaShippingFast",
            title: "Đơn hàng của bạn đang tới",
            content: "Đơn hàng 52 card bo góc giấy C300 bóng, mờ của bạn đang di chuyển đến địa điểm giao hàng. Hãy sắp xếp thời gian và kiểm tra điện thoại của mình thường xuyên để không lỡ cuộc gọi của anh giao hàng nha.",
        },
        {
            icon: "AiFillMessage",
            title: "Bạn có một tin nhắn mới",
            content: "Đơn hàng 52 card bo góc giấy C300 bóng, mờ của bạn đang di chuyển đến địa điểm giao hàng. Hãy sắp xếp thời gian và kiểm tra điện thoại của mình thường xuyên để không lỡ cuộc gọi của anh giao hàng nha.",
        },
        {
            icon: "TbShoppingCartDiscount",
            title: "Chương trình giảm giá nè bạn",
            content: "Đơn hàng 52 card bo góc giấy C300 bóng, mờ của bạn đang di chuyển đến địa điểm giao hàng. Hãy sắp xếp thời gian và kiểm tra điện thoại của mình thường xuyên để không lỡ cuộc gọi của anh giao hàng nha.",
        },
        {
            icon: "BiLoaderCircle",
            title: "Đơn hàng của bạn đang được xử lý",
            content: "Đơn hàng 52 card bo góc giấy C300 bóng, mờ của bạn đang di chuyển đến địa điểm giao hàng. Hãy sắp xếp thời gian và kiểm tra điện thoại của mình thường xuyên để không lỡ cuộc gọi của anh giao hàng nha.",
        },
        {
            icon: "MdNotificationsActive",
            title: "Bạn có một thông báo mới",
            content: "Đơn hàng 52 card bo góc giấy C300 bóng, mờ của bạn đang di chuyển đến địa điểm giao hàng. Hãy sắp xếp thời gian và kiểm tra điện thoại của mình thường xuyên để không lỡ cuộc gọi của anh giao hàng nha.",
        },
        {
            icon: "AiFillPrinter",
            title: "Đơn hàng của bạn đang được in",
            content: "Đơn hàng 52 card bo góc giấy C300 bóng, mờ của bạn đang di chuyển đến địa điểm giao hàng. Hãy sắp xếp thời gian và kiểm tra điện thoại của mình thường xuyên để không lỡ cuộc gọi của anh giao hàng nha.",
        },
    ]

    const [addressList, setAddr] = useState(ADDRESS_LIST)

    const [defaultAddr, setDefaultAddr] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
    });

    const [filterType, setFilterType] = useState("all")
    const [filtedOrderList, setFiltedOrderList] = useState(ORDER_HISTORY)

    const [cartList, setCartList] = useState(ORDER_HISTORY)

    const [newPass, setNewPass] = useState({
        currentPassword: "",
        newPassword: "",
        retypePassword: ""
    })

    const [tempNewPass, setTempNewPass] = useState({
        currentPassword: "",
        newPassword: "",
        retypePassword: ""
    })


    const [updatePassFlag, setUpdatePassFlag] = useState(false)

    const defaultAddrColor = "#9E4784"

    //Change avatar
    const [avatarImg, setAvatar] =useState("https://via.placeholder.com/150x150")
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
      
            img.onload = () => {
              if (file.size > 500000) { // limit to 500KB
                alert("File size is too large!");
              } else {
                setAvatar(event.target.result);
              }
            };
          };
      
          reader.readAsDataURL(file);
    };    

    const dispatch = useDispatch()
    const handleUpdateAccInfor = async() => {
        // console.log(registerPayload)
        // setUpdatePassFlag(true)
        dispatch(actions.updateAccInfor(userState))
        
    };

    function renderMyProfile() {
        return (
            <div className="my-profile">
                <div className="avt">
                    <div className="show-avatar-box">

                        <img className="show-avatar" src={avatarImg} alt='avatar'/>
                    </div>
                    <div className="upload-new-avt">
                        <div className="upload-btn">
                            <label className="select-new-avt" htmlFor="avatar-uploads">Chọn ảnh mới</label>
                            <p className="img-size-limit">Ảnh chỉ được tối đa 500KB</p>
                        
                        </div>
                        <input
                            type="file"
                            id="avatar-uploads"
                            name="avatar-uploads"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleImageChange}
                        />
                    </div>
                
                </div>
                <div className="detail-info">

                    <div className="line">
                        <p className="name">Họ tên:</p>
                        {isEditable1 ?
                            <span className="infoandbutton">
                                <input className="data" defaultValue={userState.name} onChange={(e) => { setUserState({ ...userState, name: e.target.value }) }} />
                                <button onClick={() => { setIsEditable1(!isEditable1); }}>Lưu</button>
                            </span>
                            :
                            <span className="infoandbutton">
                                <p className="data">{userState.name}</p>
                                <button onClick={() => { setIsEditable1(!isEditable1) }}>Thay đổi</button>
                            </span>
                        }
                    </div>
                    {/* <div className="line">
                        <p className="name">Giới tính:</p>
                        <span className="infoandbutton">
                            <p className="data">{userState.sex}</p>
                        </span>
                    </div> */}
                    <div className="line">
                        <p className="name">Ngày sinh:</p>
                        <span className="infoandbutton">
                            <p className="data">{userState.birth}</p>
                        </span>
                    </div>
                    <div className="line">
                        <p className="name">Email:</p>
                        {isEditable2 ?
                            <span className="infoandbutton">
                                <input className="data" defaultValue={userState.email} onChange={(e) => { setUserState({ ...userState, email: e.target.value }) }} />
                                <button onClick={() => { setIsEditable2(!isEditable2) }}>Lưu</button>
                            </span>
                            :
                            <span className="infoandbutton">
                                <p className="data">{userState.email}</p>
                                <button onClick={() => { setIsEditable2(!isEditable2) }}>Thay đổi</button>
                            </span>
                        }
                    </div>
                    <div className="line">
                        <p className="name">Sđt:</p>
                        {isEditable3 ?
                            <span className="infoandbutton">
                                <input className="data" defaultValue={userState.phone} onChange={(e) => { setUserState({ ...userState, phone: e.target.value }) }} />
                                <button onClick={() => { setIsEditable3(!isEditable3) }}>Lưu</button>
                            </span>
                            :
                            <span className="infoandbutton">
                                <p className="data">{userState.phone}</p>
                                <button onClick={() => { setIsEditable3(!isEditable3) }}>Thay đổi</button>
                            </span>
                        }
                    </div>
                        
                    <div className="submit-user">
                        <button onClick={handleUpdateAccInfor}>Cập nhật</button>
                    </div>



                </div>
            </div>
        )
    }


    function renderDeliveryAdd() {

        function handleSetDefaultAddrChange(event) {
            setDefaultAddr(parseInt(event.target.value, 10));
        }

        const handleUpdateAddress = (index) => {
            console.log(index)
            setAddr(prevAddr => {
                const updatedAddr = [...prevAddr];
                if (formData.name !== "") {

                    updatedAddr[index].name = formData.name;
                }

                if (formData.phone !== "") {

                    updatedAddr[index].phone = formData.phone.substring(1);
                }

                if (formData.address !== "") {

                    updatedAddr[index].address = formData.address;
                }


                console.log(updatedAddr);
                return updatedAddr;
            });
        };

        const handleAddNewAddr = () => {
            if (formData.name !== "" && formData.phone !== "" && formData.address !== "") {
                setAddr([...addressList, ...[formData]])
            }

        }

        const deleteAddr = (item) => {
            setDefaultAddr(0)
            const tempAddrList = [...addressList]
            tempAddrList.splice(item, 1)
            setAddr(tempAddrList)
        }

        const editAddrInforPopup = (index) => {
            return (
                <Popup
                    className="edit-addr-infor"
                    trigger={
                        <button className="edit-addr-btn">
                            <RiEdit2Fill /> Chỉnh sửa
                        </button>
                    }
                    modal
                    nested
                >
                    {(close) => (
                        <div className="edit-addr-form">
                            <div className="get-input-addr-infor">
                                <div className="input-box">
                                    <label htmlFor="name-input">Tên người nhận:</label>
                                    <input
                                        type="text"
                                        className="name-input"
                                        name="name-input"
                                        placeholder={addressList[index].name}
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="phone-input">Số điện thoại người nhận:</label>
                                    <input
                                        type="text"
                                        className="phone-input"
                                        name="phone-input"
                                        placeholder={addressList[index].phone}
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="addr-input">Địa chỉ người nhận:</label>
                                    <input
                                        type="text"
                                        className="addr-input"
                                        name="addr-input"
                                        placeholder={addressList[index].address}
                                        value={formData.address}
                                        onChange={(e) =>
                                            setFormData({ ...formData, address: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="check-update-addr-btn">
                                <button className="confirm-update-addr-btn" onClick={() => {
                                    handleUpdateAddress(index)
                                    close()
                                }}
                                    disabled={formData.name === "" && formData.phone === "" && formData.address === "" ? true : false}
                                >
                                    Cập nhật
                                </button>
                                <button className="cancle-update-addr-btn" onClick={close}>
                                    Hủy
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
            )
        }

        const deletePopup = (index) => {
            return (
                <Popup className="check-confirm-delete-box" trigger={
                    <button className="delete-addr-btn"
                        disabled={
                            addressList.length === 1
                        }
                    ><BsFillTrashFill />Xóa </button>
                } modal nested>
                    {
                        close => (
                            <div className="are-you-sure">
                                <div className="delete-question">
                                    Bạn có chắc muốn xóa địa chỉ này không?
                                </div>
                                <div className="answer-btns">
                                    <button className="accept-delete-btn"
                                        onClick={() => {
                                            close()
                                            deleteAddr(index)
                                        }}>
                                        Xác nhận
                                    </button>
                                    <button className="cancle-delete-btn" onClick={() => close()}>Hủy</button>
                                </div>
                            </div>
                        )
                    }

                </Popup>

            )
        }

        const addNewAddrInforPopup = () => {
            return (
                <Popup
                    className="add-addr-infor"
                    trigger={
                        <button className="add-new-addr-btn"> <AiFillPlusCircle /> Thêm địa chỉ giao hàng</button>
                    }
                    modal
                    nested
                >
                    {close => (
                        <div className="add-addr-form">
                            <div className="get-input-addr-infor">
                                <div className="input-box">
                                    <label htmlFor="name-input">Tên người nhận:</label>
                                    <input
                                        type="text"
                                        className="name-input"
                                        name="name-input"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="phone-input">Số điện thoại người nhận:</label>
                                    <input
                                        type="text"
                                        className="phone-input"
                                        name="phone-input"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="addr-input">Địa chỉ người nhận:</label>
                                    <input
                                        type="text"
                                        className="addr-input"
                                        name="addr-input"
                                        value={formData.address}
                                        onChange={(e) =>
                                            setFormData({ ...formData, address: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="check-update-addr-btn">
                                <button className="confirm-update-addr-btn" onClick={() => {
                                    handleAddNewAddr();
                                    close()
                                }}
                                    disabled={formData.name === "" && formData.phone === "" && formData.address === "" ? true : false}
                                >
                                    Thêm vào
                                </button>
                                <button className="cancle-update-addr-btn" onClick={close}>
                                    Hủy
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
            )
        }

        return (
            <div className="delivery-address">
                <div className="important-note">
                    <p>
                        Các thông tin này dùng cho việc giao hàng.
                        Để tránh mất mát không mong muốn, quý khách hàng
                        vui lòng điền đầy đủ và chính xác thông tin cũng
                        như cập nhật thông tin khi có sự thay đổi.
                    </p>
                </div>

                <div className="delivery-addr-list">
                    {addressList.map((address, index) => {
                        return (
                            <div
                                className="addr-box"
                                style={defaultAddr === index ? { backgroundColor: defaultAddrColor, color: "white", borderRadius: 8 + "px" } : {}}>
                                <div className="operations">
                                    <div className="set-default-addr-box" style={defaultAddr === index ? { backgroundColor: defaultAddrColor, color: "white", borderRadius: 8 + "px" } : {}}>
                                        <input
                                            type='radio'
                                            id={index}
                                            name='set-default-add'
                                            value={index}
                                            checked={defaultAddr === index}
                                            onChange={handleSetDefaultAddrChange}

                                        />
                                        <label htmlFor={index}>Giao đến đây</label>
                                    </div>
                                    {editAddrInforPopup(index)}

                                    {deletePopup(index)}
                                </div>
                                <div className="addr-infor-detail">
                                    <div className="name-n-phone">
                                        <div className="reciever-name">
                                            {address.name}
                                        </div>
                                        <hr />
                                        <div className="reciever-phone">
                                            (+84) {address.phone.slice(1)}
                                        </div>
                                    </div>
                                    <div className="reciever-add">
                                        {address.address}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {addNewAddrInforPopup()}
            </div>
        )
    }

    // console.log("passFlag:",updatePassFlag)
    function renderPassword() {
        let alert = ""
        const handleUpdatePassFlag = () => {
            setTempNewPass({ ...tempNewPass, ...newPass });
            setUpdatePassFlag(true)
            autoClearNewPass();
        }

        const autoClearNewPass = () => {
            setNewPass({
                currentPassword: "",
                newPassword: "",
                retypePassword: ""
            })
        }

        const printAlert = () => {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            const normalCharacter = /[qwertyuioplkjhgfdsazxcvbnm]/
            const upcaseCharacter = /[QWERTYUIOPLKJHGFDSAZXCVBNM]/
            const number = /[1234567890]/
            // handleUpdatePassFlag();
            if (newPass.currentPassword !== "" || newPass.newPassword !== "" || newPass.retypePassword !== "") {
                if (updatePassFlag) {
                    setUpdatePassFlag(false)

                }
            }

            if (updatePassFlag) {

                //console.log("tempNewPass in printAlert()/if",tempNewPass.newPassword,tempNewPass.retypePassword)
                if (tempNewPass.newPassword.split(" ").length > 1 ||
                    specialChars.test(tempNewPass.newPassword) ||
                    !normalCharacter.test(tempNewPass.newPassword) ||
                    !upcaseCharacter.test(tempNewPass.newPassword) ||
                    !number.test(tempNewPass.newPassword)
                ) {
                    alert = "Mật khẩu không hợp lệ"
                }

                if (tempNewPass.newPassword.length < 8) {
                    alert = "Mật khẩu chưa đủ 8 ký tự"
                }

                if (tempNewPass.newPassword !== tempNewPass.retypePassword) {
                    //console.log(tempNewPass.newPassword)
                    alert = "Nhập lại mật khẩu không chính xác. Vui lòng nhập lại"
                }
            }

            return (
                <p className="alert">{alert}</p>
            )
        }

        return (
            <div className="password">
                <p className="password-notice">
                    Vui lòng đặt mật khẩu ít nhất có 8 ký tự bao gồm ít
                    nhất một chữ viết hoa, một chữ thường và một chữ số. Mật khẩu cũng không gồm ký tự đặc biệt, không có khoảng trắng
                    và không có dấu.
                </p>
                <div className="change-password-form">
                    <div className="pass-input-box">
                        <label htmlFor="current-pass-input">Mật khẩu hiện tại:
                        </label>
                        <input
                            type="password"
                            className="current-pass-input"
                            name="current-pass-input"
                            // placeholder={addressList[index].name}
                            value={newPass.currentPassword}
                            onChange={(e) =>
                                setNewPass({ ...newPass, currentPassword: e.target.value })
                            }
                        />
                    </div>

                    <div className="pass-input-box">
                        <label htmlFor="new-pass-input">Mật khẩu mới:</label>
                        <input
                            type="password"
                            className="new-pass-input"
                            name="new-pass-input"
                            // placeholder={addressList[index].name}
                            value={newPass.newPassword}
                            onChange={(e) =>
                                setNewPass({ ...newPass, newPassword: e.target.value })
                            }
                        />
                    </div>

                    <div className="pass-input-box">
                        <label htmlFor="retype-pass-input">Nhập lại mật khẩu:</label>
                        <input
                            type="password"
                            className="retype-pass-input"
                            name="retype-pass-input"
                            // placeholder={addressList[index].name}
                            value={newPass.retypePassword}
                            onChange={(e) =>
                                setNewPass({ ...newPass, retypePassword: e.target.value })
                            }
                        />
                    </div>
                    <div className="bottom-bar">
                        <div className="alert-box">
                            {printAlert()}
                        </div>
                        <div className="update-n-forget-pass-btn">
                            <button
                                className="update-pass-btn"
                                onClick={handleUpdatePassFlag}
                                disabled={newPass.currentPassword === "" || newPass.newPassword === "" || newPass.retypePassword === ""}
                                style={newPass.currentPassword === "" || newPass.newPassword === "" || newPass.retypePassword === "" ? { pointerEvents: "none" } : {}}
                            >
                                Thay đổi mật khẩu
                            </button>
                            <Link className="forget-pass-btn" to="./forgetPass">
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function renderOrderHistory() {

        const handleFiltOrderHistory = (filter) => {
            setFilterType(filter)
            if (filter === "processing") {
                setFiltedOrderList(ORDER_HISTORY.filter(order => order.status === "Đang xử lý"))

            } else if (filter === "printing") {
                setFiltedOrderList(ORDER_HISTORY.filter(order => order.status === "Đang in"))
            } else if (filter === "delivering") {
                setFiltedOrderList(ORDER_HISTORY.filter(order => order.status === "Đang giao"))
            } else if (filter === "completed") {
                setFiltedOrderList(ORDER_HISTORY.filter(order => order.status === "Hoàn thành"))
            } else if (filter === "cancled") {
                setFiltedOrderList(ORDER_HISTORY.filter(order => order.status === "Đã hủy"))
            } else {
                setFiltedOrderList(ORDER_HISTORY)
            }
        }

        return (
            <div className="order-history">
                <div className="history-filter-bar">
                    <div className="history-filter-bar-container">
                        <div
                            className="all-order"
                            onClick={() => handleFiltOrderHistory("all")}
                            style={filterType === "all" ? { color: "lightcoral", textDecoration: "underline" } : {}}
                        >
                            Tất cả
                        </div>
                        <div
                            className="processing-order"
                            onClick={() => handleFiltOrderHistory("processing")}
                            style={filterType === "processing" ? { color: "lightcoral", textDecoration: "underline" } : {}}
                        >
                            Đang xử lý
                        </div>
                        <div
                            className="printing-order"
                            onClick={() => handleFiltOrderHistory("printing")}
                            style={filterType === "printing" ? { color: "lightcoral", textDecoration: "underline" } : {}}
                        >
                            Đang in
                        </div>
                        <div
                            className="delivering-order"
                            onClick={() => handleFiltOrderHistory("delivering")}
                            style={filterType === "delivering" ? { color: "lightcoral", textDecoration: "underline" } : {}}
                        >
                            Đang giao
                        </div>
                        <div
                            className="completed-order"
                            onClick={() => handleFiltOrderHistory("completed")}
                            style={filterType === "completed" ? { color: "lightcoral", textDecoration: "underline" } : {}}
                        >
                            Hoàn thành
                        </div>
                        <div
                            className="cancled-order"
                            onClick={() => handleFiltOrderHistory("cancled")}
                            style={filterType === "cancled" ? { color: "lightcoral", textDecoration: "underline" } : {}}
                        >
                            Đã hủy
                        </div>
                    </div>
                    
                </div>

                <div className="order-history-list">
                    {

                        filtedOrderList.map(order => {

                            return (
                                <div className="order-infor-box">
                                    <div className="overview-infor">
                                        <div className="order-code">
                                            <p className="order-code-title">
                                                Mã đơn hàng:
                                            </p>
                                            <div className="order-code-value">
                                                {order.orderCode}
                                            </div>
                                        </div>
                                        <Link to="../orders" className="view-detail-order">Xem chi tiết</Link>
                                    </div>
                                    <div className="top-infor-bar">

                                        <div className="product-infor">

                                            <div className="product-name">
                                                {order.nameProduct}
                                            </div>

                                            <div className="options-of-product">

                                                <div className="product-material-options" style={order.material === "nan" ? { display: "none" } : {}}>
                                                    {order.material}
                                                </div>
                                                <div className="product-effect-options" style={order.effect === "nan" ? { display: "none" } : {}}>
                                                    {order.effect}
                                                </div>
                                                <div className="product-size-options">
                                                    {order.size}
                                                </div>

                                            </div>    
                                        </div>

                                        <div className="product-status">
                                            {order.status}
                                        </div>

                                    </div>

                                    <div className="middle-infor-bar">
                                        <div className="payment-method">
                                            {/**Thanh toán */}
                                            <div className="method-box">
                                                <p className="method-title">
                                                    Thanh toán:
                                                </p>

                                                <div className="method-infor">
                                                    {order.paymentMethod}
                                                </div>
                                            </div>

                                            {/**Ngày thanh toán */}
                                            <div className="method-box">
                                                <p className="method-title">
                                                    Ngày thanh toán:
                                                </p>

                                                <div className="method-infor">
                                                    {order.dateOfPayment}
                                                </div>
                                            </div>

                                            {/**Số lượng */}
                                            <div className="method-box">
                                                <p className="method-title">
                                                    Sồ lượng:
                                                </p>

                                                <div className="method-infor">
                                                    {order.quantity}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="costs">
                                            {/**Giá */}
                                            <div className="cost-box">
                                                <div className="cost-title">
                                                    Chi phí đơn hàng:
                                                </div>

                                                <div className="cost-infor">
                                                    {order.orderCost} đ
                                                </div>
                                            </div>

                                            {/**Giảm giá */}
                                            <div className="cost-box">
                                                <div className="cost-title">
                                                    Giảm giá:
                                                </div>

                                                <div className="cost-infor">
                                                    {order.discount} đ
                                                </div>
                                            </div>

                                            {/**Giá vận chuyển */}
                                            <div className="cost-box">
                                                <div className="cost-title">
                                                    Chi phí vận chuyên:
                                                </div>

                                                <div className="cost-infor">
                                                    {order.diliveryCost} đ
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bottom-infor-bar">
                                        <div className="total-cost">
                                            <p className="total-cost-title"> Thành tiền: </p>
                                            <p className="total-cost-value"> {order.totalCost} đ</p>
                                        </div>
                                        <div className="order-btns">
                                            <button className="reorder-btn">
                                                Mua lại
                                            </button>
                                            <button className="love-btn">
                                                
                                                Yêu thích
                                            </button>
                                            <button className="feedback-btn">
                                                Phản hồi
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }

    function renderYourCart() {

        const handleDeleteCart = (index) => {
            const tempCartList = [...cartList];
            tempCartList.splice(index, 1);
            setCartList(tempCartList)
        }

        return (
            <div className="user-cart">
                {cartList.map((cart, index) => {
                    return (
                        <div className="cart-infor-box">
                            <div className="top-infor-bar">
                                <div className="product-name">
                                    {cart.nameProduct}
                                </div>
                                <div className="product-options">

                                    <div className="product-material-options" style={cart.material === "nan" ? { display: "none" } : {}}>
                                        {cart.material}
                                    </div>
                                    <div className="effect-n-size">
                                        <div className="product-effect-options" style={cart.effect === "nan" ? { display: "none" } : {}}>
                                            {cart.effect}
                                        </div>
                                        <div className="product-size-options">
                                            {cart.size}
                                        </div>
                                    
                                    </div>
                                </div>

                            </div>
                            <div className="bottom-bar">
                            
                                <div className="left-infor-bar">

                                    <div className="current-quantity-box">
                                        <p className="current-quantity-title">
                                            Sồ lượng hiện tại:
                                        </p>

                                        <div className="current-quantity-infor">
                                            {cart.quantity} card
                                        </div>
                                    </div>
                                    {/**Giá */}
                                    <div className="price-box">
                                        <div className="unit-price-title">
                                            Đơn giá:
                                        </div>

                                        <div className="unit-price-infor">
                                            12 000đ/ sản phẩm
                                        </div>
                                    </div>

                                </div>
                                <div className="cart-btns">
                                    <button className="continuos-edit-btn">
                                        Tiếp tục chỉnh sửa
                                    </button>
                                    <button className="love-btn">
                                        <AiOutlineHeart/>
                                        <p>Yêu thích</p>
                                    </button>
                                    <button
                                        className="delete-cart"
                                        onClick={() => handleDeleteCart(index)}
                                    >
                                        <BsFillTrashFill />
                                        <p>Xóa</p>
                                    </button>
                                </div>
                            </div>


                        </div>

                    )
                })}
            </div>
        )
    }

    function renderYourNotice() {
        const renderIcon = (name) => {
            if (name === "FaShippingFast") {
                return (
                    <FaShippingFast />
                )
            } else if (name === "AiFillMessage") {
                return (
                    <AiFillMessage />
                )
            } else if (name === "TbShoppingCartDiscount") {
                return (
                    <TbShoppingCartDiscount />
                )
            } else if (name === "BiLoaderCircle") {
                return (
                    <BiLoaderCircle />
                )
            } else if (name === "MdNotificationsActive") {
                return (
                    <MdNotificationsActive />
                )
            } else if (name === "AiFillPrinter") {
                return (
                    <AiFillPrinter />
                )
            }
        }
        return (
            <div className="user-notice">
                {USER_NOTICE.map(notice => {
                    return (
                        <div className="user-notice-box">
                            <div className="notice-title">
                                {renderIcon(notice.icon)}
                                {notice.title}
                            </div>
                            <div className="notice-content">
                                {notice.content}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    function rederContent() {
        if (contentType === "myProfile") {
            return renderMyProfile()
        } else if (contentType === "deliveryAddress") {
            return renderDeliveryAdd()
        } else if (contentType === "password") {
            return renderPassword()
        } else if (contentType === "orderHistory") {
            return renderOrderHistory()
        } else if (contentType === "yourCart") {
            return renderYourCart()
        } else if (contentType === "yourNotice") {
            return renderYourNotice()
        }
    }

    return (
        <>

            <div className="main">
                <div className="side-column">
                    <div className="side-menu-container-big-screen">
                        <div className="user-logo-box">
                            <div className="avatar-container">
                                <img src={avatarImg} alt='avatar'></img>
                            </div>
                            <div className="username">
                                <p className="name">{userState.name}</p>
                                <p className="editing"> Chỉnh sửa hồ sơ <RiEdit2Fill /></p>
                            </div>
                        </div>
                        <ul className="acc-left">
                            <li className="acc-Btn"
                                style={contentType === "myProfile" || contentType === "deliveryAddress" || contentType === "password" ? { backgroundColor: defaultAddrColor, color: "white" } : {}}
                                onClick={() => {
                                    toggleDropdown("oppen")
                                    handleSetSection("myProfile")
                                }}>
                                {/* <BsFacebook className="iconBtn"/>  */}
                                <p className="text-Btn"> Tài khoản của tôi</p>
                            </li>
                            {isOpen && (

                                <ul className="dropdown-menu-acc">
                                    <li
                                        onClick={() => handleSetSection("myProfile")}
                                        style={contentType === "myProfile" ? { textDecoration: "underline", color: defaultAddrColor } : {}}
                                    >Hồ sơ của tôi</li>
                                    <li
                                        onClick={() => handleSetSection("deliveryAddress")}
                                        style={contentType === "deliveryAddress" ? { textDecoration: "underline", color: defaultAddrColor } : {}}
                                    >Địa chỉ giao hàng</li>
                                    <li
                                        onClick={() => handleSetSection("password")}
                                        style={contentType === "password" ? { textDecoration: "underline", color: defaultAddrColor } : {}}
                                    >Mật khẩu</li>
                                </ul>
                            )}
                            <li className="acc-Btn"
                                style={contentType === "orderHistory" ? { backgroundColor: defaultAddrColor, color: "white" } : {}}
                                onClick={() => {
                                    handleSetSection("orderHistory")
                                    toggleDropdown("close")
                                }}>
                                {/* <BsFacebook className="iconBtn"/>  */}
                                <p className="text-Btn" > Lịch sử mua hàng</p>
                            </li>
                            <li className="acc-Btn"
                                style={contentType === "yourCart" ? { backgroundColor: defaultAddrColor, color: "white" } : {}}
                                onClick={() => {
                                    handleSetSection("yourCart")
                                    toggleDropdown("close")
                                }}>

                                {/* <BsFacebook className="iconBtn"/>  */}
                                <p className="text-Btn"> Giỏ hàng của tôi</p>
                            </li>
                            <li className="acc-Btn"
                                style={contentType === "yourNotice" ? { backgroundColor: defaultAddrColor, color: "white" } : {}}
                                onClick={() => {
                                    handleSetSection("yourNotice")
                                    toggleDropdown("close")
                                }}>
                                {/* <BsFacebook className="iconBtn"/>  */}
                                <p className="text-Btn"> Thông báo của tôi</p>
                            </li>
                        </ul>
                    </div>

                    <div className="side-menu-container-small-screen">
                        <IoListCircle 
                            className="side-menu-minimize" 
                            onClick={()=>toggleSideMenu(!sideMenuFlag)}
                        />

                        <div 
                            className="side-menu-content"
                            style={sideMenuFlag===true?{display: "block"}:{display:"none"}}
                        >

                            <div className="user-logo-box">
                                <img src='https://via.placeholder.com/80x80' alt='avatar'></img>
                                <div className="username">
                                    <p className="name">{userState.name}</p>
                                    <p className="editing"> Chỉnh sửa hồ sơ <RiEdit2Fill /></p>
                                </div>
                            </div>
                            <ul className="acc-left">
                                <li className={contentType === "myProfile" || contentType === "deliveryAddress" || contentType === "password"?"acc-Btn-active":"acc-Btn"}
                                    // style={contentType === "myProfile" || contentType === "deliveryAddress" || contentType === "password" ? { backgroundColor: defaultAddrColor, color: "white" } : {}}
                                    onClick={() => {
                                        toggleDropdown("oppen")
                                        handleSetSection("myProfile")
                                    }}>
                                    {/* <BsFacebook className="iconBtn"/>  */}
                                    <p className="text-Btn"> Tài khoản của tôi</p>
                                </li>
                                {isOpen && (

                                    <ul className="dropdown-menu-acc">
                                        <li
                                            onClick={() => handleSetSection("myProfile")}
                                            style={contentType === "myProfile" ? { textDecoration: "underline", color: defaultAddrColor } : {}}
                                        >Hồ sơ của tôi</li>
                                        <li
                                            onClick={() => handleSetSection("deliveryAddress")}
                                            style={contentType === "deliveryAddress" ? { textDecoration: "underline", color: defaultAddrColor } : {}}
                                        >Địa chỉ giao hàng</li>
                                        <li
                                            onClick={() => handleSetSection("password")}
                                            style={contentType === "password" ? { textDecoration: "underline", color: defaultAddrColor } : {}}
                                        >Mật khẩu</li>
                                    </ul>
                                )}
                                <li className={contentType === "orderHistory" ? "acc-Btn-active" : "acc-Btn"}
                                    // style={contentType === "orderHistory" ? { backgroundColor: defaultAddrColor, color: "white" } : {}}
                                    onClick={() => {
                                        handleSetSection("orderHistory")
                                        toggleDropdown("close")
                                    }}>
                                    {/* <BsFacebook className="iconBtn"/>  */}
                                    <p className="text-Btn" > Lịch sử mua hàng</p>
                                </li>
                                <li className={contentType === "yourCart" ? "acc-Btn-active" : "acc-Btn"}
                                    // style={contentType === "yourCart" ? { backgroundColor: defaultAddrColor, color: "white" } : {}}
                                    onClick={() => {
                                        handleSetSection("yourCart")
                                        toggleDropdown("close")
                                    }}>

                                    {/* <BsFacebook className="iconBtn"/>  */}
                                    <p className="text-Btn"> Giỏ hàng của tôi</p>
                                </li>
                                <li className={contentType === "yourNotice" ? "acc-Btn-active" : "acc-Btn"}
                                    // style={contentType === "yourNotice" ? { backgroundColor: defaultAddrColor, color: "white" } : {}}
                                    onClick={() => {
                                        handleSetSection("yourNotice")
                                        toggleDropdown("close")
                                    }}>
                                    {/* <BsFacebook className="iconBtn"/>  */}
                                    <p className="text-Btn"> Thông báo của tôi</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr class="vertical"></hr>
                </div>
                <div className="content">
                    <div className="content-account">
                        <div className="title-account">
                            <h2> {ACOUNT_SECTIONS[contentType][0]}</h2>
                            <p> {ACOUNT_SECTIONS[contentType][1]}</p>
                        </div>
                        <hr></hr>
                        {rederContent()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;