import React from "react";
import './component_styles/getUserInput.scss'

export default function GetUserInput({infor_req,user_infor,set_user_infor}){
    // console.log(infor_req[1].description[0].content);

    return(
        <div className="get-input-item">

            {
                infor_req[1].type!=="radio"&&
                    <div className="get-input-content">
                        <div className="title">
                            <p>
                                {infor_req[1].label}
                            </p>
                        </div>
                        <div className="input-box">

                            <input 
                                type={infor_req[1].type}
                                className={`${infor_req[0]}-input`}
                                placeholder=""
                                name={`${infor_req[0]}-input`}
                                value={user_infor[infor_req[0]]}
                                onChange={(e)=>set_user_infor(prev=>({...prev,[infor_req[0]]:e.target.value}))}
                                required={infor_req[1].required}
                            />
                        </div>
                    </div>
            }
            {
                infor_req[1].type==="radio"&&
                    <div className="get-input-content">
                        <div className="title">
                            <p>
                                {infor_req[1].label}
                            </p>
                        </div>
                        <div className="input-box">
                            {infor_req[1].value.map((content,index)=>{
                                return(
                                    
                                    <label className='option' htmlFor={`${infor_req[0]}-${index}-input`}>
                                        <input 
                                            type={infor_req[1].type}
                                            className={`${infor_req[0]}-input`}
                                            id={`${infor_req[0]}-${index}-input`}
                                            placeholder=""
                                            name={`${infor_req[0]}-input`}
                                            onClick={()=>set_user_infor(prev=>({...prev,[infor_req[0]]:content}))}
                                            required={infor_req[1].required}
                                            // checked={index===0}
                                        />
                                        
                                        {content}
                                    </label>
                                )
                            })}
                        </div>
                        
                        <div className="op-des">
                            {infor_req[1].description&&
                       
                                infor_req[1].description.map(item=>{
                                    if (item.name===user_infor[infor_req[0]]) {
                                      return(
                                        <div className="op-des-content">

                                            <p>{item.content}</p>
                                            {
                                                item.img&&
                                                <div className="img-container">
                                                
                                                    <img src={item.img} alt="" />
                                                </div>    
                                            }
                                        </div>
                                      )  
                                    } 
                                })
                         
                            } 
                        </div> 

                    </div>
            }
        </div>
    )
}