import React from "react";

export default function PrintAre({printArea}){
    return(
        <div className="print-area">
            <div className="print-area-content-title">
                <hr/>
                <p>Vùng in</p>
                <hr/>
            </div>
            <div className="print-area-content">
                {printArea.img.map(src=>{
                    return(
                       <img src={src} alt="Ví dụ về vùng in"/>
                                        
                    )
                })}
            </div>
        </div>
    )
}