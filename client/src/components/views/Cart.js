import React,{useState } from "react";
import { Link } from "react-router-dom";
import {TiTick} from "react-icons/ti"
import '../styles/cart.scss';

function Cart(){
    const [products, setProducts] = useState([
        { id: 0, img: "http://img1", price: 5000, quantity: 10, type: { 1: "papper", 2: "wood" }, isChecked: false, total: 1000000 },
        { id: 1, img: "http://img2", price: 2500, quantity: 100, type: { 1: "papper", 2: "wood" }, isChecked: false, total: 1000000 },
        { id: 2, img: "http://img3", price: 3000, quantity: 150, type: { 1: "papper", 2: "wood" }, isChecked: false, total: 1000000 },
        { id: 3, img: "http://img4", price: 4500, quantity: 120, type: { 1: "papper", 2: "wood" }, isChecked: false, total: 1000000 }
      ]);
      
    const [price, setPrice] = useState(0);
    const [disabledORDER, setDisabledORDER] = useState(true);
    
    const handleCheck = (index) => {
    const updatedProducts = products.map((product) => {
        if (product.id === Number(index)) {
        return {
            ...product,
            isChecked: !product.isChecked
        };
        } else {
        return product;
        }
    });
    setProducts(updatedProducts);
    const updatedPrice = updatedProducts.reduce((acc, product) => acc + (product.isChecked ? product.total : 0), 0);
    setPrice(updatedPrice);
    if (updatedPrice>0) setDisabledORDER(false); else setDisabledORDER(true);
    };
    

    const handleDelete = (i) => {
        let index = Number(i)
        const newProducts = products.filter((product) => product.id !== index);
        // console.log(newProducts)
        setProducts(newProducts);
    };
    
    const passOrder=()=>{
        const uncheckedProducts = products.filter(product => !product.isChecked);
        const updatedPrice = uncheckedProducts.reduce((acc, product) => acc + (product.isChecked ? product.total : 0), 0);
        setPrice(updatedPrice);
        setProducts(uncheckedProducts);
        if (updatedPrice>0) setDisabledORDER(false); else setDisabledORDER(true);
    }

    
    const [dropDel,setDropDel] = useState(0)
   
    const [boxConfirm,setBoxConfirm] = useState(false)


    function updatedata(){
        // Hoặc
        // lấy data tick và thanh toán bỏ vô product rồi push lên 
        // Hoặc
        // chỉ push lên data tick thôi
        console.log('nothing')
    }

    return(
        <>
            {products.length>0?
            <div className="main-shoppingcart">
                <div className="category">
                    <div className="checkboxcart"></div>
                    <div className="cartcolumn1"><h2>Kiểu in</h2></div>
                    <div className="cartcolumn2"><h2>Đơn giá</h2></div>
                    <div className="cartcolumn3"><h2>Số lượng</h2></div>
                    <div className="cartcolumn4"><h2>Thao tác</h2></div>
                    <div className="cartcolumn5"><h2>Tổng giá</h2></div>
                </div>
                {products.length>0 &&
                    <div className="valuecartcolumn">
                    {products.map((product) =>{
                        return(
                            <div className="linecartcolumn" key={product.id}>
                                <div
                                    className="checkboxcart"
                                    id="checkboxcart"
                                    value={product.id}
                                    onClick={(e) => {
                                        handleCheck(e.currentTarget.getAttribute('value'));
                                    }}
                                    >
                                    {product.isChecked ? 
                                        <div className="checkboxcart-yes"><TiTick className="icontick-cart"/></div>
                                        :
                                        <div className="checkboxcart-no"></div>
                                    }
                                </div>

                                <div className="cartcolumn1"> {product.type[1]}</div>
                                <div className="cartcolumn2">{product.price}</div>
                                <div className="cartcolumn3">{product.quantity}</div>
                                <div className="cartcolumn4">
                                    <button>Xem Chi tiết</button>
                                    <button>Chỉnh sửa</button>
                                    {!dropDel?
                                        <button onClick={()=>{setDropDel(true)}}>Xóa</button>
                                        :
                                        <>
                                        <button onClick={()=>{setDropDel(false)}}>Hủy</button>
                                        <button value={product.id} 
                                            onClick={(e)=>{handleDelete(e.currentTarget.getAttribute('value'))}}>Xóa</button>
                                        </>
                                    }
                                </div>
                                <div className="cartcolumn5">{product.total}</div>
                            </div>
                        )
                        
                    })
                    }
                    </div>

                }
                <div className="totalcolumn">
                    <div className="textcolumnincart">
                        <p>Tổng giá: </p>
                        <p>{price}</p>
                    </div>
                    <div className="totalprice">
                        <button onClick={() => setBoxConfirm(true)} disabled={disabledORDER}>Đặt hàng</button>
                    </div>
                </div>

            </div>
            :
            <div className="nothingincart">
                <span>Bạn chưa có thiết kế hay đơn hàng nào cả. </span>
                <Link to="/product">Bắt đầu ngay !!!</Link>
            </div>
            }
            {boxConfirm && (
                <div className="modalcart">
                    <div className="modal-content">
                        <h2>Xác nhận đặt hàng</h2>
                        <p>Bạn xác nhận đặt đơn hàng với giá: {price} đồng và sẽ thanh toán đầy đủ ?</p>
                        <div className ="boxconfirmbutton">
                        <button className="cancelcart" onClick={() => setBoxConfirm(false)}> Hủy </button>
                        <button className="acceptcart" onClick={() => {setBoxConfirm(false); updatedata(); passOrder()}}> Đồng ý </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cart;