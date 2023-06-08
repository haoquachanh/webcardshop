import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
// import OrderInfor from "./OrderInfor";

const basicParameter = [
    { paramsName: "Màu sắc", value: "color" },
    { paramsName: "Hệ màu", value: "colorsys" },
    { paramsName: "Số mặt in", value: "sides" },
    { paramsName: "Kỹ thuật in", value: "pritech" },
    { paramsName: "Bo góc thẻ nhựa", value: "cut" },
    { paramsName: "Thời gian thành phẩm", value: "time" },
    { paramsName: "Loại ấn phẩm", value: "category" },
    { paramsName: "Chất liệu", value: "material" },
    { 
      paramsName: "Hiệu ứng",
      value: "effect"
    },
    { 
      paramsName: "Kích thước thành phẩm", 
      value: "size"
    },
    { 
      paramsName: "Bạn có file thiết kế chưa?", 
      value: [
        "Đã có",
        "Chưa có",
      ],
    },
      
  ];

export default function BasicParamsRender({product_infor}){

    const handleSwitchToLogin=()=>{
        const url = `/login`;
    
        // Redirect to the specified URL
        window.location.href = url;
      }

    const handleOrderClick = () => {
        localStorage.setItem('order', JSON.stringify([userSelected]));
        const queryParams = { 
            name:product_infor.name,
            productId: product_infor.id,
        };
        const searchParams = new URLSearchParams(queryParams).toString();
        const url = `/order-confirmation?${searchParams}`;
    
        // Redirect to the specified URL
        window.location.href = url;
      };


      const data = JSON.parse(localStorage.getItem("persist:auth"));
      const token = JSON.parse(data.token);
      // console.log(token);
    
      const decodedToken = token===null?{userId:null}:JSON.parse(atob(token?.split('.')[1]));
      const handleCartClick = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/v1/cart/create-new?userId=${decodedToken?.userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Additional headers if required
            },
            body: JSON.stringify({
                name:product_infor.name,
                productId: product_infor.productId,
                material:userSelected.material,
                size:userSelected.size,
                sides:userSelected.sides,
                effect:userSelected.effect,
                color:userSelected.quantity,
                colorsys:userSelected.isDesigned,
                img_src:userSelected.img_src
              // Add more data as needed
            }),
          });
                  // Redirect to the specified URL
        window.location.href = `/carts?userId=${decodedToken?.userId}`;
          if (response.ok) {
            // Request was successful
            const data = await response.json();
            // console.log(data);
          } else {
            // Handle the error condition
            console.log('Error:', response.status);
          }
        } catch (error) {
          // Handle network or other errors
          console.error('Error:', error);
        }
      };
      
      

    const [userSelected,setUserSelection]= useState({
        productId:product_infor?.id,
        name:product_infor?.name,
        material:product_infor?.[basicParameter[7].value].split(", ")[0],
        sides:product_infor?.[basicParameter[2].value].split(", ")[0],
        effect:product_infor?.[basicParameter[8].value].split(", ")[0],
        size:product_infor?.[basicParameter[9].value].split(", ")[0],
        quantity:"0",
        isDesigned:basicParameter[10].value[0],
        img_src:""
    })

    useEffect(()=>{
        setUserSelection({
            productId:product_infor?.id,
            name:product_infor?.name,
            material:product_infor?.[basicParameter[7].value].split(", ")[0],
            sides:product_infor?.[basicParameter[2].value].split(", ")[0],
            effect:product_infor?.[basicParameter[8].value].split(", ")[0],
            size:product_infor?.[basicParameter[9].value].split(", ")[0],
            quantity:"0",
            isDesigned:basicParameter[10].value[0],
            img_src:""
        })
    },[product_infor])

    const handleSetUserSelection=(attribute,value)=>{
        setUserSelection(prev=>({...prev,[attribute]:value}))
    }
    // console.log(userSelected);
    return (
        <div className="basic-params-content">
            <div className='product-name'>
                <div className='name'>
                {product_infor?.name}
                </div>
                <div className='sub-name'>
                {product_infor?.name2}
                </div>
            </div>
            
            <div className="params-container">
                <div className="title">
                    <p>Thông số cơ bản:</p>
                </div>
                <div className="params-item-box">

                    {basicParameter.map(params=>{
                        return(
                            <div className="basic-params-item">
                                <div className="basic-params-title">
                                    {/* <p>{params.paramsName}: </p> */}
                                    {
                                        product_infor?.name==="Sticker"&&
                                        params.paramsName==="Chất liệu" &&
                                        <p>Kiểu thành phẩm: </p>
                                    }
                                                                        {
                                        product_infor?.name==="Sticker"&&
                                        params.paramsName!=="Chất liệu" &&
                                        <p>{params.paramsName}:  </p>
                                    }
                                    {
                                        product_infor?.name!=="Sticker"&&
                                        <p>{params.paramsName}: </p>
                                    }
                                </div>
                                
                                {
                                    params.paramsName==='Hiệu ứng'&&
                                    
                                    <div className="ef-size-params-value">
                                        {
                                            product_infor?.[params.value].split(', ').map(item=>{
                                                return(

                                                    <p 
                                                        className={userSelected['effect']===item?'option-active':'option'}
                                                        onClick={()=>handleSetUserSelection('effect',item)}
                                                    >{item==="non"?"Không có":item}</p>
                                                )
                                            })
                                        }
                                    </div>
                                }

{
                                    params.paramsName==='Số mặt in'&&
                                    
                                    <div className="ef-size-params-value">
                                        {
                                            product_infor?.[params.value].split(', ').map(item=>{
                                                return(

                                                    <p 
                                                        className={userSelected['sides']===item?'option-active':'option'}
                                                        onClick={()=>handleSetUserSelection('sides',item)}
                                                    >{item==="non"?"Không có":item}</p>
                                                )
                                            })
                                        }
                                    </div>
                                }

                                {
                                    params.paramsName==='Bạn có file thiết kế chưa?'&&
                                    
                                    <div className="ef-size-params-value">
                                        {
                                            params.value.map(item=>{
                                                return(

                                                    <p 
                                                        className={userSelected['isDesigned']===item?'option-active':'option'}
                                                        onClick={()=>handleSetUserSelection('isDesigned',item)}
                                                    >{item}</p>
                                                )
                                            })
                                        }
                                    </div>
                                }

                                {params.paramsName === 'Chất liệu' && (
                                <div className="ef-size-params-value">
                                    {product_infor?.[params.value]?.split(', ').map(item => (
                                    <p
                                        className={userSelected['material'] === item ? 'option-active' : 'option'}
                                        onClick={() => handleSetUserSelection('material', item)}
                                    >
                                        {item==="non"?"Không có":item}
                                    </p>
                                    ))}
                                </div>
                                )}


                                {
                                    params.paramsName==='Kích thước thành phẩm'&&
                                    
                                    <div className="ef-size-params-value">
                                        {
                                            product_infor?.[params.value].split(', ').map(item=>{
                                                return(

                                                    <p 
                                                        className={userSelected['size']===item?'option-active':'option'}
                                                        onClick={()=>handleSetUserSelection('size',item)}
                                                    >{item==="non"?"Không có":item}</p>
                                                )
                                            })
                                        }
                                    </div>
                                }

                                {
                                    params.paramsName!=='Hiệu ứng' 
                                    && params.paramsName!=='Kích thước thành phẩm'
                                    &&  params.paramsName!=='Chất liệu' 
                                    && params.paramsName!=='Kiểu thành phẩm'
                                    && params.paramsName!=='Bạn có file thiết kế chưa?'
                                    && params.paramsName!=='Số mặt in'&&(
                                    <div className="basic-params-value">
                                        {/* {console.log(params.value)} */}
                                        {product_infor?.[params.value].split(', ').map(item=>{
                                            // console.log(item);
                                            return(

                                                <p className="option">{item}</p>
                                            )
                                        })}
                                    </div>
                                )}

                           
                            </div>    
                        )
                    })}
                    <div className="basic-params-item">
                        <div className="basic-params-title">
                            <p>Số lượng: </p>
                        </div>
                        <div className="basic-params-input">
                            <input 
                                type="text"
                                className="img-src-link-input"
                                placeholder="Nhập số lượng vào đây"
                                name="img-src-link-input"
                                value={userSelected.quantity}
                                onChange={(e)=>setUserSelection(prev=>({...prev,["quantity"]:e.target.value}))}
                                
                            />
                        </div>
                    </div>
                    <div className="basic-params-item">
                        <div className="basic-params-title">
                            <p>Link ảnh: </p>
                        </div>
                        <div className="basic-params-input">
                            <input 
                                type="text"
                                className="img-src-link-input"
                                placeholder="Bỏ link ảnh vào đây"
                                name="img-src-link-input"
                                value={userSelected.img_src}
                                onChange={(e)=>setUserSelection(prev=>({...prev,["img_src"]:e.target.value}))}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="order-btns">
                    <button className="btns" onClick={data.isLoggedIn==="true"?handleOrderClick:handleSwitchToLogin}>

                            ĐẶT IN NGAY

                    </button>
                    <button className="btns" onClick={data.isLoggedIn==="true"?handleCartClick:handleSwitchToLogin}>
  
                            Thêm vào giỏ hàng

                    </button>
                </div>    

            </div>
            
        </div>
    )
}