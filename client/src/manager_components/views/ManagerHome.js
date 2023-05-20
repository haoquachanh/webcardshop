import React, {useState} from "react"
import './styles/managerHome.scss'

import SaleTable from "./SaleTable"
import AccountTable from "./AccountTable"
import OrderTable from "./OrderTable"
import WebsiteManagement from "./WebsiteManagement"
import ProductTable from "./ProductTable"


/** Import icon */
import {MdPointOfSale,MdAccountCircle,MdPolicy,
        MdContactPhone,MdNotifications,
        MdNotificationsActive,MdDownloadForOffline} from "react-icons/md"
import {BsFillBagFill,BsFillBoxSeamFill,BsFillFileImageFill} from "react-icons/bs"

const ADMIN_INFOR=[
    {
        avatar:"https://via.placeholder.com/80x80",
        name:"Hiên Nguyễn",
        position:"Admin Master"
    }
]

const fileType=".csv"

const SelectedStyle={
    backgroundColor:"#60E693", 
    color:"#6C2F9F",
    pointerEvents:"none"
}

const TITLE_BRIEF_LIST={

    sales:{
        title:"Doanh thu",
        brief:"Thống kê các số liệu doanh thu"
    },


    accounts:{
        title:"Tài khoản",
        brief:"Thống kê và quản lý thông tin tài khoản "
    },

    orders:{
        title:"Đơn hàng",
        brief:"Thống kê và quản lý thông tin đơn hàng"
    },

    products:{
        title:"Sản phẩm",
        brief:"Thống kê và quản lý thông tin sản phẩm"
    },

    web_imgs:{
        title:"Trang web",
        brief:"Xem, chỉnh sử và thay thế các hiển thị trên website"
    },

    web_policies:{
        title:"Trang web",
        brief:"Xem, chỉnh sử và thay thế các hiển thị trên website"
    },

    web_contact:{
        title:"Trang web",
        brief:"Xem, chỉnh sử và thay thế các hiển thị trên website"
    },
  
}

function ManagerHome(){

    const [tableSelction, setTableSelection]= useState("sales")

    const handleRenderTable=(table)=>{
        setTableSelection(table)
    }

    const renderTable=()=>{
        if (tableSelction==="sales") {
            return(
                <SaleTable/>
            )
        } else if(tableSelction==="accounts"){
            
            return(
                <AccountTable/>
            )

        }else if(tableSelction==="orders"){

            return(
                <OrderTable/>
            )
            
        }else if(tableSelction==="products"){
            return(
                <ProductTable/>
            )
        }else if(tableSelction==="web_imgs" || tableSelction==="web_policies" || tableSelction==="web_contact"){
            return(
                <WebsiteManagement/>
            )
        }else{
            return(
                <div className="error">
                    <h1>Không có trang hợp lệ</h1>
                </div>
            )
        }
    }

    return (
        <div className="manager-container">
            <div className="side-menu">
                <div className="side-menu-content">
                    <div className="title-page">
                        ADMINIS
                    </div>
                    <div className="admin-brief-box">
                        <div className="admin-avt">
                            <img src={ADMIN_INFOR[0].avatar} alt={ADMIN_INFOR[0].avatar}/>
                        </div>    
                        <div className="admin-name">
                            <div className="name">
                                {ADMIN_INFOR[0].name}
                            </div>
                            <div className="position">
                                {ADMIN_INFOR[0].position}
                            </div>
                        </div>
                    </div>
                    <div className="menus">
                        <div className="menu-component">
                            <div className="menu-title">
                                Về cửa hàng
                            </div>

                            <ul className="options">
                                <li 
                                    id="management-option" 
                                    style={tableSelction==="sales"?SelectedStyle:{}}
                                    onClick={()=>handleRenderTable("sales")}>
                                    <MdPointOfSale/>
                                    Doanh số
                                </li>

                                <li 
                                    id="management-option" 
                                    style={tableSelction==="accounts"?SelectedStyle:{}}
                                    onClick={()=>handleRenderTable("accounts")}>
                                    <MdAccountCircle/>
                                    Tài khoản
                                </li>

                                <li 
                                    id="management-option" 
                                    style={tableSelction==="orders"?SelectedStyle:{}}
                                    onClick={()=>handleRenderTable("orders")}>
                                    <BsFillBagFill/>
                                    Đơn hàng
                                </li>

                                <li 
                                    id="management-option" 
                                    style={tableSelction==="products"?SelectedStyle:{}}
                                    onClick={()=>handleRenderTable("products")}>
                                    <BsFillBoxSeamFill/>
                                    Sản phẩm
                                </li>
                            </ul>

                        </div>

                        <div className="menu-component">
                            <div className="menu-title" >
                                Về trang web
                            </div>

                            <ul className="options">
                                <li id="management-option" 
                                    style={tableSelction==="web_imgs"?SelectedStyle:{}}
                                    onClick={()=>handleRenderTable("web_imgs")}>
                                    <BsFillFileImageFill/>
                                    Hình ảnh 
                                </li>

                                <li id="management-option" 
                                    style={tableSelction==="web_policies"?SelectedStyle:{}}
                                    onClick={()=>handleRenderTable("web_policies")}>
                                    <MdPolicy/>
                                    Chính sách
                                </li>

                                <li id="management-option" 
                                    style={tableSelction==="web_contact"?SelectedStyle:{}}
                                    onClick={()=>handleRenderTable("web_contact")}>
                                    <MdContactPhone/>
                                    Liên hệ
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="management-contents">
                <div className="admin-header">
                    <div className="anouncements">
                        <MdNotifications/>
                    </div>
                    <div className="account">
                        <MdAccountCircle/>
                    </div>
                </div>
                <div className="content-title">
                    <div className="title-brief">
                        <p className="title">
                            {TITLE_BRIEF_LIST[tableSelction].title}
                        </p>
                        <p className="brief">
                            {TITLE_BRIEF_LIST[tableSelction].brief}
                        </p>
                    </div>
                    
                    <div className="download-report-btn">
                        <button>
                            Tải báo cáo {fileType}
                            <MdDownloadForOffline/>
                        </button>
                    </div>

                </div>
                
                <div className="data-table">
                    {renderTable()}
                </div>
            </div>
        </div>    
    )
}export default ManagerHome