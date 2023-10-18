import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(r => r.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
               <div className="py-10  ">
            <h1 className="mb-5 text-4xl text-red-500 font-semibold text-center" data-aos="flip-left">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                {
                    products?.map(product => <ProductsCard
                         key={product.id}
                         product = { product }></ProductsCard> )
                        
                    
                } 
                <ProductsCard></ProductsCard>
             </div> 
        </div>
        </div>
    );
};

export default Products;