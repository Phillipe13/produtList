import React from "react";
//Lista de produtos

const ProductListing = props => {
    const { products } = props;
    return (
        <div>
            { products.map((product, key) => (
                <div key={product.name}>{product.name}</div>
                )
            )}
        </div>
    );
};
export { ProductListing };