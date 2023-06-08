import React,{useState,useEffect} from "react";
import OrderInfoBox from "./config/OrderInforBox";

import './styles/orderTable.scss'

function OrderTable(){

    /** fetch data to display in table */
    const [data,setData]=useState([])
     
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/admin/category')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);

 
    return(
        <div className="order-table-content">
            {data.map(order=>{

                return <OrderInfoBox orderInfor={order}/>
            })}
        </div>
    )
}export default OrderTable