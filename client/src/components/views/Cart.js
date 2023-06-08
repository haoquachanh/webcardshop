import React,{useState,useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/cart.scss';
import OrderedProductDetail from "../components-render/OrderedProductDetail";

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

function Cart(){

    const [cartList,setCartList]= useState([])
    const currentURL = window.location.href;
    const user_id = currentURL.match(/userId=(\d+)/)[1];
    useEffect(() => {
        fetch(`http://localhost:3001/api/v1/cart/get?userId=${user_id}`)
          .then(response => response.json())
          .then(data => setCartList(data.cartItems))
          .catch(error => console.error(error));
    }, []);

    // console.log(cartList);

    const [orderList,setOrderList] = useState([]);

    const handleRadioChange = (event,cart) => {
        if (event.target.checked) {
          setOrderList([...orderList, cart]); // Add the cart to orderList
        } else {
          setOrderList(orderList.filter((item) => item !== cart)); // Remove the cart from orderList
        }
      };

      
      
      const handleOrderClick = () => {
        localStorage.setItem('order', JSON.stringify(orderList));
        const queryParams = { 
            userId:user_id
        };
        const searchParams = new URLSearchParams(queryParams).toString();
        const url = `/order-confirmation?${searchParams}`;
    
        // Redirect to the specified URL
        window.location.href = url;
      };
    console.log(cartList);
    return(
        <div className="main">
            <div className="cart-container">
                <div className="cart-list">
                    {
                        cartList.length===0?"Bạn chưa có đơn hàng nào hết":
                        cartList.map(cart=>{
                            return(
                                <label>
                                    <input
                                        type="checkbox"
                                        className="product-in-cart"
                                        name="product-in-cart"
                                        id="product-in-cart"
                                        onChange={(event)=>handleRadioChange(event,cart)}
                                    />
                                    <div className="product-in-cart-infor">

                                        <OrderedProductDetail product_infor={cart}/>
                                    </div>
                                </label>
                            )
                        })
                    }
                </div>   
                <div className="cart-btns">
                    <button className="order" onClick={handleOrderClick} disabled={cartList?.cartItems===undefined}>
                        Đặt hàng
                    </button>
                </div>
            </div>
        </div>
       
    )
}

export default Cart;