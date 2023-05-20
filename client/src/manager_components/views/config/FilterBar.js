import React, { useState } from "react";
import './config_styles/filterBar.scss'

/** Import icons */
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'


function FilterBar({columnList, handleSetColumnStatus, orderStatusFilterText,handleSetFirstElementOrderStatus}){

    const [displayColumnListFlag,toggleColumnList]= useState(false)

    const [optionChosen, setOptionChosen] = useState("Đang xử lý");

    const handleOptionChange = (event) => {
      const selectedOption = event.target.value;
      setOptionChosen(selectedOption);
      handleSetFirstElementOrderStatus(selectedOption); // pass the selected option to parent component
    };

    return(
        <div className="filter-bar-content">

            <div className="order-status-filter-dropdown">
                <select 
                
                    className="order-status-filter"
                    value={optionChosen} 
                    onChange={handleOptionChange}
                
                >

                    {orderStatusFilterText.map((status)=>{
                        
                        return(

                            <option value={status}>{status}</option>
                        )
                    })}
                    {/* <option
                        onChange={(handleSetFirstElementOrderStatus(0))} 
                        value="processing">Đang xử lý</option>
                    <option value="printing">Đang in</option>
                    <option value="delivering">Đang giao</option>
                    <option value="completed">Hoàn thành</option>
                    <option value="cancled">Đã hủy</option> */}
                </select>
            </div>

            <div className="searching-bar">
                <input type="search" className="search-key" placeholder="ID, Tên, Tình trạng"/>
                <button className="search-btn">Tìm kiếm</button>
            </div>

            <div className="set-column-display">
                <button className="columns-dropdown-menu" onClick={()=>toggleColumnList(!displayColumnListFlag)}>
                    Hiển thị cột
                    <FaChevronDown style={!displayColumnListFlag?{transform:"rotate(-180deg)",transition:"transform 0.2s ease-out"}:{transition:"transform 0.2s ease-out"}}/>
                </button>
                <div className="column-list" style={!displayColumnListFlag?{display:"none"}:{}}>
                    {
                        columnList.map((column,index)=>{
                            if (column.name!=="img_preview") {
                                
                                return(
                                    
                                    <label htmlFor={column.name} >
                                        <input 
                                            type="checkbox" 
                                            id={column.name} 
                                            name={column.name} 
                                            checked={column.status}
                                            onChange={()=>handleSetColumnStatus(index,"status",!column.status)}
                                        />
                                        
                                        {column.display}
                                    </label>
                                    
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )

}export default FilterBar