import React from "react";
import Table from "./Table";

export default function ProductOptionRender({productOptions}){
    return (
        <div className="product-options-content">
            <div className="title">
                <p>Bảng giá:</p>
            </div>
            <div className="product-option-container">

                <div className="unit-price-container">

                    <Table 
                        tableClassName={"unlimited-designs"}
                        title={"Không giới hạn mẫu"}
                        columns={['Số lương', 'Giá k/cái']}
                        data={productOptions.price.unlimitedDesigns}
                        dataName={['quantity','price']}/>        
                    
                    <hr/>

                    <Table 
                        tableClassName={"limited-designs"}
                        title={`Dưới ${productOptions.price.limitedDesigns.limit} mẫu:`}
                        columns={['Số lương', 'Giá k/cái']}
                        data={productOptions.price.limitedDesigns.price_table}
                        dataName={['quantity','price']}/>
                    <hr/>
                    <Table 
                        tableClassName={"extra-price"}
                        title={'Giá thêm:'}
                        columns={false}
                        data={productOptions.price.extra}
                        dataName={['add','price']}/>
                </div>

            </div>
        </div>        

           
    )
}