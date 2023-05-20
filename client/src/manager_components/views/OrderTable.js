import React, { useState,useEffect } from "react";
import FilterBar from "./config/FilterBar";
import './styles/orderTable.scss';

import {MdDownloadForOffline,MdCheckBoxOutlineBlank,MdCheckBox} from 'react-icons/md'
import {BsFillFileEarmarkImageFill} from 'react-icons/bs'

/**import fake data */

import {DEFAULT_COLUMNS,fake_data, DEFAULT_ORDER_STATUS} from '../models/FakeData.js'

const listAttribute={
    id_order: "id_order",
    id_user: "id_user",
    user_fullname: "user_fullname",
    print_type: "print_type",
    material: "material",
    effect: "effect",
    edited_imgs: "edited_imgs",
    original_img: "original_img",
    img_quantity: "img_quantity",
    card_quantity: "card_quantity",
    unit_price: "unit_price",
    delivery_cost: "delivery_cost",
    total_cost: "total_cost",
    order_date: "order_date",
    delivery_date: "delivery_date",
    order_status: "order_status",
    confirmed_order: "confirmed_order",
    payment_status:"payment_status",
}


function OrderTable(){

    /** fetch data to display in table */
    // const [data,setData]=useState([])
     
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/v1/admin/category')
    //       .then(response => response.json())
    //       .then(data => setData(data))
    //       .catch(error => console.error(error));
    //   }, []);

    const [columnList,setColumnList]=useState(DEFAULT_COLUMNS)

    const [orderData, setOrderData] = useState(fake_data.map((order) => ({
        ...order,
        imgPreviewFlag: false,
    })));

    const handleToggleImgPre=(id)=>{
        
        const updatedIsShown = [...orderData];
        updatedIsShown.filter(order=>order.id_order===id).map(order=>{

            order.imgPreviewFlag = !order.imgPreviewFlag;
        })
        setOrderData(updatedIsShown);
    }

    const handleSetOrderAttribute=(id_order, attribute, value)=>{
        const tempData = [...orderData];
        tempData.filter(order=>order.id_order===id_order).map(order=>{

            order[attribute] = value;
            if(attribute===listAttribute.payment_status){
                if(order.order_status==="Đang xử lý"){

                    if(value){
                        order.order_status="Đang in"
                    }
                }
            }
        })
        setOrderData(tempData);
    }

    const handleSetColumnStatus = (index, attribute, value) => {
        setColumnList(prevColumnStatus => {
          // make a copy of the previous files array
          const updatedStatus = [...prevColumnStatus];
          // update the attribute of the file at the given index
          updatedStatus[index] = { ...updatedStatus[index], [attribute]: value };
          // return the updated files array
          return updatedStatus;
        });
    };


    const [orderStatusFilterText,setOrderStatusFilterText]= useState(DEFAULT_ORDER_STATUS)

    // console.log(orderStatusFilterText[0])
    const handleSetFirstElementOrderStatus=(evt)=>{
        const tempStatusList=[...orderStatusFilterText];

        tempStatusList.map((status,index)=>{
            if(status===evt){

                const tempFirstValue=tempStatusList[0];
                tempStatusList[0]=status;
                tempStatusList[index]=tempFirstValue;
            }
        })
        setOrderStatusFilterText(tempStatusList)
    }


    const handleSetImgStatus=(id_order,img_index,value)=>{
        console.log("img_imdex: ",img_index)
        console.log("id_order: ",id_order)
        setOrderData(prevImgStatus => {
            // make a copy of the previous files array
            const updatedStatus = [...prevImgStatus];
            // update the attribute of the file at the given index
            updatedStatus.filter(order=>order.id_order===id_order).map(order=>{
                
                order.img_preview[img_index].PrintStatus=value
            })
            // return the updated files array
            return updatedStatus;
        });
    }

    return(
        <div className="order-table-content">
            <FilterBar 
                columnList={columnList} 
                handleSetColumnStatus={handleSetColumnStatus}
                orderStatusFilterText={orderStatusFilterText}
                handleSetFirstElementOrderStatus={handleSetFirstElementOrderStatus}
            />
            <div className="table-container">

                <div className="order-table-data">
                    <div className="order-column-title">
                        <div className="column-item">
                            Thao tác
                        </div>

                        {columnList.filter(column=>column.status===true && column.name!=="img_preview").map(column=>{
                            return(

                                <div className="column-item">
                                    {column.display}
                                </div>    

                            )
                        })}
                          
                    </div>
                    {
                        orderStatusFilterText.map(orderStatus=>{
                            return(
                                <>
                                    <p className="order-status-filter-text">{orderStatus}</p>
                                    <p className="order-status-filter-text-hiden">{orderStatus}</p>
                                    
                                    {/* {console.table(data)} */}
                                    <div className="data-display">
                                        {/** This display for reality data */}
                                        {/* {data.map(row=>{
                                            return(
                                                
                                                <div className="row">
                                                    
                                                    {columnList.filter(column=>column.status===true).map(column=>{
                                                        return(
                                                            <div className="column">
                                                                {row["id"]}
                                                            </div>
                                                        )
                                                    })}
                                                    <div className="column">
                                                        <button>Xác nhận đơn hàng</button>
                                                        <button>Xác nhận thanh toán</button>
                                                    </div>
                                                </div>
                                            )
                                        })} */}
                                        {orderData.filter(row=>row.order_status===orderStatus).length<=0&&
                                            // console.log("haha")
                                            <div className="empty-row">
                                                Không có đơn hàng nào
                                            </div>
                                        }
                                        {/** This display for test */}
                                        {orderData.filter(row=>row.order_status===orderStatus).map((row,index)=>{
                                            return(
                                                
                                                <div className="row">
                                                    
                                                    <div className="order-infor-part">
                                                        <div className="column">
                                                            <div className="order-confirm-btn">
                                                                <button 
                                                                    style={row.confirmed_order?{backgroundColor: "green",color:"white"}:{}}
                                                                    onClick={()=>handleSetOrderAttribute(row.id_order,listAttribute.confirmed_order,true)}
                                                                    disabled={row.order_status!=="Đang xử lý"}>Xác nhận đơn hàng</button>
                                                                <button 
                                                                    style={row.payment_status?{backgroundColor: "green",color:"white"}:{}}
                                                                    onClick={()=>handleSetOrderAttribute(row.id_order,listAttribute.payment_status,true)}
                                                                    disabled={row.order_status!=="Đang xử lý"||row.confirmed_order===false}>Xác nhận thanh toán</button>
                                                            </div>
                                                        </div>
                                                        {columnList.filter(column=>column.status===true && column.name!=="img_preview").map((column)=>{
                                                            if (column.name==="STT") {
                                                                return(
                                                                    <div className="column">
                                                                        {index+1}
                                                                    </div>    
                                                                )
                                                            } else if(column.name==="edited_imgs" || column.name==="original_imgs"){
                                                                return(

                                                                    <div className="column">
                                                                        <button className="download_imgs">
                                                                            <BsFillFileEarmarkImageFill/>
                                                                            {column.name}.zip
                                                                            <MdDownloadForOffline/>
                                                                        </button>
                                                                    </div>
                                                                )
                                                            }

                                                            return(
                                                                <div className="column">
                                                                    {row[column.name]}
                                                                </div>
                                                            )
                                                        })}
                                                        
                                                    </div>
                                                    <div className="preview-img-part">
                                                        <button 
                                                            className="preview-img-btn"
                                                            onClick={()=>handleToggleImgPre(row.id_order)}
                                                        >Preview</button>
                                                        {row.imgPreviewFlag&&

                                                            <div className="imgs-preview-component">
                                                                {row.img_preview.map((img,img_index)=>{
                                                                    return(
                                                                        <div className="img-box">
                                                                            <img src={img.img} alt={img.img}/>
                                                                            <p>Số lượng: {img.quantity}</p>
                                                                            {orderStatus==="Đang in"&&
                                                                                
                                                                                <div 
                                                                                    className="img-status" 
                                                                                    onClick={orderStatus==="Đang in"?()=>handleSetImgStatus(row.id_order,img_index,!img.PrintStatus):{}}
                                                                                >
                                                                                    {img.PrintStatus===true&&
                                                                                        <MdCheckBox/>
                                                                                    }
                                                                                    {img.PrintStatus===false&&
                                                                                        <MdCheckBoxOutlineBlank/>
                                                                                    }
                                                                                </div>
                                                                            }
                                                                        </div>   
                                                                    )
                                                                })}
                                                                <button 
                                                                    className="change-order-status"
                                                                    style={orderStatus!=="Đang in"?{display:"none"}:{}}
                                                                    disabled={row.img_preview.filter(img=>img.PrintStatus===false).length<=0?false:true}
                                                                    onClick={()=>handleSetOrderAttribute(row.id_order,listAttribute.order_status,"Đang giao")}
                                                                >Giao đơn này</button>
                                                            </div>
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}export default OrderTable