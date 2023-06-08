import React from "react";
import ProductPreviewBox from "./ProductPreviewBox";


export default function RelationProduct({relationProducts,currentProduct}){

    let productId=10

    const handleClick = (product_id) => {
      const queryParams = { id: product_id};
      const searchParams = new URLSearchParams(queryParams).toString();
      const url = `/product?${searchParams}`;
  
      // Redirect to the specified URL
      window.location.href = url;
    };

    return(
        <div className="relation-product">
            <div className="relation-products-title">
                <hr/>
                <div className="title">
                    <p className="main-title">Sản phẩm bạn có thể thích</p>
                    <p className="sub-title">Các sản phẩm liên quan với {currentProduct?.name}</p>
                </div>
                <hr/>
            </div>
            <div className="relation-products-list">
                {relationProducts?.filter(item=>item.category===currentProduct?.category||item.category==="Card bo góc").map((item, index) => {
                    
                    if (index % 3 === 0) {
                    return (
                        <div className="row-item" key={index}>
                            <ProductPreviewBox product={item} index={index} handleClick={() => handleClick(item.productId)} />
                            {relationProducts[index + 1] && (
                                <ProductPreviewBox product={relationProducts[index + 1]} index={index + 1} handleClick={() => handleClick(relationProducts[index + 1].productId)} />
                            )}
                            {relationProducts[index + 2] && (
                                <ProductPreviewBox product={relationProducts[index + 2]} index={index + 2} handleClick={() => handleClick(relationProducts[index + 2].productId)} />
                            )}
                            
                        </div>
                    );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}