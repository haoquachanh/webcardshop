import React from "react";

export default function Table({tableClassName,title,columns,data,dataName}){
    
    // console.log(columns);
    return (
        <div className={`${tableClassName}-table`}>
            <p className="title">{title}</p>
            
            <table>
                {
                    columns!==false&&
                        <tr>
                            {columns.map(column=>{
                                return <th>{column}</th>
                            })}
                        </tr>
                }
                {data.map(row=>{
                    return (
                        <tr>
                            {dataName.map(value=>{
                                return(
                                    <td>{row[value]}</td>
                                )
                            })}
                            
                        </tr>
                    )
                })}
                
            </table>
        </div>
    )
}