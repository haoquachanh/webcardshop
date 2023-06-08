import React from "react";
import '../components-render/component_styles/description.scss'

export default function DescriptionRender({description_data,numberic}){
    // console.log(numberic); 
    return(
        <div className="des-container">

            <div className="des-title">
                <p>{numberic!==false?`${numberic+1}. `:''}{description_data.title}</p>
            </div>
            {
                description_data.content&&
                    <div className="des-content">
                    
                        {description_data.content.split('/br/').filter(cont=>cont!=='').map((cont,index)=>{
                            return(
                                <p>{numberic?`${index+1} - `:''}{cont}</p>
                            )
                        })}
                        
                    </div>
            }
            
            {description_data.img&&
            
            
                <div className="des-img">

                    {description_data.img.split('##').map(src=>{
                        return(
                            <img src={src} alt="Ảnh minh họa"></img>
                        )
                    })}
                </div>
            }
        </div>
    )
}